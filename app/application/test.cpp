using namespace std;

int main() {
	// your code goes here
	int t;
	cin>>t;
	while(t--){
	    int n,a,b,c,k=1;
	    cin>>n;
	    vector <int> s;
	    for(int i=0;i<n;i++){
	        cin>>a;
	        s.push_back(a);
	    }
	    while(s[n-1]-s[0]/2 >=2){
	        b=s[n-1]-s[0]/2;
	        while(pow(2,k)<b){
	            c=pow(2,k);
	            k++;
	            sort(s.begin(),s.end());
	        }
	        s[n-1]-=c;
	        s[0]+=c;
	        
	    }
	    int flag=0;
	    int temp=s[0];
	    for(int i=1;i<n;i++){
	        if(s[i]==temp){
	            continue;
	        }
	        else{
	            flag++;
	        }
	    }
	    if(flag==0){
	        cout<<"YES"<<endl;
	    }
	    else{
	        cout<<"NO"<<endl;
	    }
	}
	
	return 0;
}
