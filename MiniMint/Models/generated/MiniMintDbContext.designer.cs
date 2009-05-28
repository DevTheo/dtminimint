﻿#pragma warning disable 1591
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:2.0.50727.4918
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MiniMint.Data
{
	using System.Data.Linq;
	using System.Data.Linq.Mapping;
	using System.Data;
	using System.Collections.Generic;
	using System.Reflection;
	using System.Linq;
	using System.Linq.Expressions;
	
	
	[System.Data.Linq.Mapping.DatabaseAttribute(Name="dtbanking")]
	public partial class MiniMintDbContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region Extensibility Method Definitions
    partial void OnCreated();
    partial void Insertaccount(MiniMint.Models.generated.account instance);
    partial void Updateaccount(MiniMint.Models.generated.account instance);
    partial void Deleteaccount(MiniMint.Models.generated.account instance);
    partial void Insertdailyregister(MiniMint.Models.generated.dailyregister instance);
    partial void Updatedailyregister(MiniMint.Models.generated.dailyregister instance);
    partial void Deletedailyregister(MiniMint.Models.generated.dailyregister instance);
    partial void Insertregistercategory(MiniMint.Models.generated.registercategory instance);
    partial void Updateregistercategory(MiniMint.Models.generated.registercategory instance);
    partial void Deleteregistercategory(MiniMint.Models.generated.registercategory instance);
    #endregion
		
		public MiniMintDbContext() : 
				base(global::System.Configuration.ConfigurationManager.ConnectionStrings["MiniMintConnection"].ConnectionString, mappingSource)
		{
			OnCreated();
		}
		
		public MiniMintDbContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public MiniMintDbContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public MiniMintDbContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public MiniMintDbContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public System.Data.Linq.Table<MiniMint.Models.generated.account> accounts
		{
			get
			{
				return this.GetTable<MiniMint.Models.generated.account>();
			}
		}
		
		public System.Data.Linq.Table<MiniMint.Models.generated.dailyregister> dailyregisters
		{
			get
			{
				return this.GetTable<MiniMint.Models.generated.dailyregister>();
			}
		}
		
		public System.Data.Linq.Table<MiniMint.Models.generated.registercategory> registercategories
		{
			get
			{
				return this.GetTable<MiniMint.Models.generated.registercategory>();
			}
		}
		
		public System.Data.Linq.Table<MiniMint.Models.generated.accountsummary> accountsummaries
		{
			get
			{
				return this.GetTable<MiniMint.Models.generated.accountsummary>();
			}
		}
	}
}
namespace MiniMint.Models.generated
{
	using System.Data.Linq;
	using System.Data.Linq.Mapping;
	using System.ComponentModel;
	using System;
	
	
	[Table(Name="dbo.accounts")]
	public partial class account : INotifyPropertyChanging, INotifyPropertyChanged
	{
		
		private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
		
		private int _account_id;
		
		private string _account_name;
		
		private EntitySet<dailyregister> _dailyregisters;
		
    #region Extensibility Method Definitions
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void Onaccount_idChanging(int value);
    partial void Onaccount_idChanged();
    partial void Onaccount_nameChanging(string value);
    partial void Onaccount_nameChanged();
    #endregion
		
		public account()
		{
			this._dailyregisters = new EntitySet<dailyregister>(new Action<dailyregister>(this.attach_dailyregisters), new Action<dailyregister>(this.detach_dailyregisters));
			OnCreated();
		}
		
		[Column(Storage="_account_id", AutoSync=AutoSync.OnInsert, DbType="Int NOT NULL IDENTITY", IsPrimaryKey=true, IsDbGenerated=true)]
		public int account_id
		{
			get
			{
				return this._account_id;
			}
			set
			{
				if ((this._account_id != value))
				{
					this.Onaccount_idChanging(value);
					this.SendPropertyChanging();
					this._account_id = value;
					this.SendPropertyChanged("account_id");
					this.Onaccount_idChanged();
				}
			}
		}
		
		[Column(Storage="_account_name", DbType="VarChar(50) NOT NULL", CanBeNull=false)]
		public string account_name
		{
			get
			{
				return this._account_name;
			}
			set
			{
				if ((this._account_name != value))
				{
					this.Onaccount_nameChanging(value);
					this.SendPropertyChanging();
					this._account_name = value;
					this.SendPropertyChanged("account_name");
					this.Onaccount_nameChanged();
				}
			}
		}
		
		[Association(Name="account_dailyregister", Storage="_dailyregisters", ThisKey="account_id", OtherKey="registry_account")]
		public EntitySet<dailyregister> dailyregisters
		{
			get
			{
				return this._dailyregisters;
			}
			set
			{
				this._dailyregisters.Assign(value);
			}
		}
		
		public event PropertyChangingEventHandler PropertyChanging;
		
		public event PropertyChangedEventHandler PropertyChanged;
		
		protected virtual void SendPropertyChanging()
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, emptyChangingEventArgs);
			}
		}
		
		protected virtual void SendPropertyChanged(String propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}
		
		private void attach_dailyregisters(dailyregister entity)
		{
			this.SendPropertyChanging();
			entity.account = this;
		}
		
		private void detach_dailyregisters(dailyregister entity)
		{
			this.SendPropertyChanging();
			entity.account = null;
		}
	}
	
	[Table(Name="dbo.dailyregister")]
	public partial class dailyregister : INotifyPropertyChanging, INotifyPropertyChanged
	{
		
		private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
		
		private int _registry_id;
		
		private System.DateTime _registry_date;
		
		private double _registry_amount;
		
		private string _registry_enteredby;
		
		private int _registry_account;
		
		private System.Nullable<int> _register_category_id;
		
		private EntityRef<account> _account;
		
		private EntityRef<registercategory> _registercategory;
		
    #region Extensibility Method Definitions
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void Onregistry_idChanging(int value);
    partial void Onregistry_idChanged();
    partial void Onregistry_dateChanging(System.DateTime value);
    partial void Onregistry_dateChanged();
    partial void Onregistry_amountChanging(double value);
    partial void Onregistry_amountChanged();
    partial void Onregistry_enteredbyChanging(string value);
    partial void Onregistry_enteredbyChanged();
    partial void Onregistry_accountChanging(int value);
    partial void Onregistry_accountChanged();
    partial void Onregister_category_idChanging(System.Nullable<int> value);
    partial void Onregister_category_idChanged();
    #endregion
		
		public dailyregister()
		{
			this._account = default(EntityRef<account>);
			this._registercategory = default(EntityRef<registercategory>);
			OnCreated();
		}
		
		[Column(Storage="_registry_id", AutoSync=AutoSync.OnInsert, DbType="Int NOT NULL IDENTITY", IsPrimaryKey=true, IsDbGenerated=true)]
		public int registry_id
		{
			get
			{
				return this._registry_id;
			}
			set
			{
				if ((this._registry_id != value))
				{
					this.Onregistry_idChanging(value);
					this.SendPropertyChanging();
					this._registry_id = value;
					this.SendPropertyChanged("registry_id");
					this.Onregistry_idChanged();
				}
			}
		}
		
		[Column(Storage="_registry_date", DbType="DateTime NOT NULL")]
		public System.DateTime registry_date
		{
			get
			{
				return this._registry_date;
			}
			set
			{
				if ((this._registry_date != value))
				{
					this.Onregistry_dateChanging(value);
					this.SendPropertyChanging();
					this._registry_date = value;
					this.SendPropertyChanged("registry_date");
					this.Onregistry_dateChanged();
				}
			}
		}
		
		[Column(Storage="_registry_amount", DbType="Float NOT NULL")]
		public double registry_amount
		{
			get
			{
				return this._registry_amount;
			}
			set
			{
				if ((this._registry_amount != value))
				{
					this.Onregistry_amountChanging(value);
					this.SendPropertyChanging();
					this._registry_amount = value;
					this.SendPropertyChanged("registry_amount");
					this.Onregistry_amountChanged();
				}
			}
		}
		
		[Column(Storage="_registry_enteredby", DbType="VarChar(255) NOT NULL", CanBeNull=false)]
		public string registry_enteredby
		{
			get
			{
				return this._registry_enteredby;
			}
			set
			{
				if ((this._registry_enteredby != value))
				{
					this.Onregistry_enteredbyChanging(value);
					this.SendPropertyChanging();
					this._registry_enteredby = value;
					this.SendPropertyChanged("registry_enteredby");
					this.Onregistry_enteredbyChanged();
				}
			}
		}
		
		[Column(Storage="_registry_account", DbType="Int NOT NULL")]
		public int registry_account
		{
			get
			{
				return this._registry_account;
			}
			set
			{
				if ((this._registry_account != value))
				{
					if (this._account.HasLoadedOrAssignedValue)
					{
						throw new System.Data.Linq.ForeignKeyReferenceAlreadyHasValueException();
					}
					this.Onregistry_accountChanging(value);
					this.SendPropertyChanging();
					this._registry_account = value;
					this.SendPropertyChanged("registry_account");
					this.Onregistry_accountChanged();
				}
			}
		}
		
		[Column(Storage="_register_category_id", DbType="Int")]
		public System.Nullable<int> register_category_id
		{
			get
			{
				return this._register_category_id;
			}
			set
			{
				if ((this._register_category_id != value))
				{
					if (this._registercategory.HasLoadedOrAssignedValue)
					{
						throw new System.Data.Linq.ForeignKeyReferenceAlreadyHasValueException();
					}
					this.Onregister_category_idChanging(value);
					this.SendPropertyChanging();
					this._register_category_id = value;
					this.SendPropertyChanged("register_category_id");
					this.Onregister_category_idChanged();
				}
			}
		}
		
		[Association(Name="account_dailyregister", Storage="_account", ThisKey="registry_account", OtherKey="account_id", IsForeignKey=true)]
		public account account
		{
			get
			{
				return this._account.Entity;
			}
			set
			{
				account previousValue = this._account.Entity;
				if (((previousValue != value) 
							|| (this._account.HasLoadedOrAssignedValue == false)))
				{
					this.SendPropertyChanging();
					if ((previousValue != null))
					{
						this._account.Entity = null;
						previousValue.dailyregisters.Remove(this);
					}
					this._account.Entity = value;
					if ((value != null))
					{
						value.dailyregisters.Add(this);
						this._registry_account = value.account_id;
					}
					else
					{
						this._registry_account = default(int);
					}
					this.SendPropertyChanged("account");
				}
			}
		}
		
		[Association(Name="registercategory_dailyregister", Storage="_registercategory", ThisKey="register_category_id", OtherKey="register_category_id", IsForeignKey=true)]
		public registercategory registercategory
		{
			get
			{
				return this._registercategory.Entity;
			}
			set
			{
				registercategory previousValue = this._registercategory.Entity;
				if (((previousValue != value) 
							|| (this._registercategory.HasLoadedOrAssignedValue == false)))
				{
					this.SendPropertyChanging();
					if ((previousValue != null))
					{
						this._registercategory.Entity = null;
						previousValue.dailyregisters.Remove(this);
					}
					this._registercategory.Entity = value;
					if ((value != null))
					{
						value.dailyregisters.Add(this);
						this._register_category_id = value.register_category_id;
					}
					else
					{
						this._register_category_id = default(Nullable<int>);
					}
					this.SendPropertyChanged("registercategory");
				}
			}
		}
		
		public event PropertyChangingEventHandler PropertyChanging;
		
		public event PropertyChangedEventHandler PropertyChanged;
		
		protected virtual void SendPropertyChanging()
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, emptyChangingEventArgs);
			}
		}
		
		protected virtual void SendPropertyChanged(String propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}
	}
	
	[Table(Name="dbo.registercategories")]
	public partial class registercategory : INotifyPropertyChanging, INotifyPropertyChanged
	{
		
		private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
		
		private int _register_category_id;
		
		private string _register_category_name;
		
		private EntitySet<dailyregister> _dailyregisters;
		
    #region Extensibility Method Definitions
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void Onregister_category_idChanging(int value);
    partial void Onregister_category_idChanged();
    partial void Onregister_category_nameChanging(string value);
    partial void Onregister_category_nameChanged();
    #endregion
		
		public registercategory()
		{
			this._dailyregisters = new EntitySet<dailyregister>(new Action<dailyregister>(this.attach_dailyregisters), new Action<dailyregister>(this.detach_dailyregisters));
			OnCreated();
		}
		
		[Column(Storage="_register_category_id", AutoSync=AutoSync.OnInsert, DbType="Int NOT NULL IDENTITY", IsPrimaryKey=true, IsDbGenerated=true)]
		public int register_category_id
		{
			get
			{
				return this._register_category_id;
			}
			set
			{
				if ((this._register_category_id != value))
				{
					this.Onregister_category_idChanging(value);
					this.SendPropertyChanging();
					this._register_category_id = value;
					this.SendPropertyChanged("register_category_id");
					this.Onregister_category_idChanged();
				}
			}
		}
		
		[Column(Storage="_register_category_name", DbType="VarChar(50) NOT NULL", CanBeNull=false)]
		public string register_category_name
		{
			get
			{
				return this._register_category_name;
			}
			set
			{
				if ((this._register_category_name != value))
				{
					this.Onregister_category_nameChanging(value);
					this.SendPropertyChanging();
					this._register_category_name = value;
					this.SendPropertyChanged("register_category_name");
					this.Onregister_category_nameChanged();
				}
			}
		}
		
		[Association(Name="registercategory_dailyregister", Storage="_dailyregisters", ThisKey="register_category_id", OtherKey="register_category_id")]
		public EntitySet<dailyregister> dailyregisters
		{
			get
			{
				return this._dailyregisters;
			}
			set
			{
				this._dailyregisters.Assign(value);
			}
		}
		
		public event PropertyChangingEventHandler PropertyChanging;
		
		public event PropertyChangedEventHandler PropertyChanged;
		
		protected virtual void SendPropertyChanging()
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, emptyChangingEventArgs);
			}
		}
		
		protected virtual void SendPropertyChanged(String propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}
		
		private void attach_dailyregisters(dailyregister entity)
		{
			this.SendPropertyChanging();
			entity.registercategory = this;
		}
		
		private void detach_dailyregisters(dailyregister entity)
		{
			this.SendPropertyChanging();
			entity.registercategory = null;
		}
	}
	
	[Table(Name="dbo.accountsummary")]
	public partial class accountsummary
	{
		
		private string _account_name;
		
		private System.Nullable<double> _CurrentTotal;
		
		public accountsummary()
		{
		}
		
		[Column(Storage="_account_name", DbType="VarChar(50) NOT NULL", CanBeNull=false)]
		public string account_name
		{
			get
			{
				return this._account_name;
			}
			set
			{
				if ((this._account_name != value))
				{
					this._account_name = value;
				}
			}
		}
		
		[Column(Storage="_CurrentTotal", DbType="Float")]
		public System.Nullable<double> CurrentTotal
		{
			get
			{
				return this._CurrentTotal;
			}
			set
			{
				if ((this._CurrentTotal != value))
				{
					this._CurrentTotal = value;
				}
			}
		}
	}
}
#pragma warning restore 1591
