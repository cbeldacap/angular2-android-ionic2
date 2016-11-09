// IONIC:

export class ConfigMock {

  public get(): any {
    return '';
  }

  public getBoolean(): boolean {
    return true;
  }

  public getNumber(): number {
    return 1;
  }

  public getRootNav(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

}

export class FormMock {
  public register(): any {
    return true;
  }
}

export class NavMock {

  public pop(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public push(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }

  public setRoot(): any {
    return true;
  }

}

export class PlatformMock {
  public ready(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}

export class MenuMock {
  public close(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }

  public register(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }

  public unregister(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }

  public getMenus(): any {
    let a: Array<string> = [];
    return a;
  }
}
