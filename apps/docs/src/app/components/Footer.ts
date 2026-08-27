import { Component } from "@angular/core";

import { version } from '@iconify/json/package.json'

@Component({
  selector: 'Footer',
  host: {
    class: 'text-center text-sm py-4'
  },
  templateUrl: './Footer.html',
})
export class Footer {
  protected readonly iconifyVersion = version;
}
3
