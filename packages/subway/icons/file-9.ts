import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFile9Icon],svg[subway-file-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 0v128h128zm-64 405.3c35.4 0 64-28.6 64-64c0-9.4-2.1-18.2-5.7-26.2l-84.5 84.5c8 3.6 16.8 5.7 26.2 5.7M298.7 0H64v512h384V149.3H298.7zm64 341.3c0 58.9-47.8 106.7-106.7 106.7s-106.7-47.7-106.7-106.7c0-58.9 47.8-106.7 106.7-106.7c58.9.1 106.7 47.8 106.7 106.7m-170.7 0c0 9.4 2.1 18.2 5.7 26.2l84.5-84.5c-8-3.6-16.9-5.8-26.2-5.8c-35.4.1-64 28.8-64 64.1"></svg:path>`,
})
export class SubwayFile9Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
