/**********************************************************************
 *
 * active.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"widgets/filter/obj",
		"kWStat/validate"
	],
	function
	(
		filter,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initiafilterzors
	//***
	//*******************************************************************//

		function active()
		{
			this.m_sKWExt	= "active";
		}

		active.prototype = new filter();
		active.prototype.constructor = active;
		active.constructor = filter.prototype.constructor;
		
		active.prototype.check = function check()
		{
			filter.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		active.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			filter.prototype.init.call(this);
		};  

	//*******************************************************************//
	//***																		
	//***		public accessors
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																		
	//***		public accessors
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																		
	//***		public callbacks
	//***
	//*******************************************************************//
		
	//*******************************************************************//
	//***																		
	//***		public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																		
	//***		private methods (non-ovrrides)
	//***
	//*******************************************************************//
		
	//*******************************************************************//
	//***																		
	//***		private methods
	//***
	//*******************************************************************//

		return active;
		
	}
)		