#include <iostream>
using namespace std;

int main() {
    // Write C++ code here
    int t;
    cin>>t;

    while(t--) {
        int a,b,c;
        cin>>a>>b>>c;

        if(a + b == c) {
            cout<<"+";
        } else {
            cout<<"-";
        }
        cout<<endl;
    }
    return 0;
}