import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFile7Icon],svg[subway-file-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M325.5 0v128h128zm-21.3 0H69.5v512h384V149.3H304.2zm64 277.3c23.5 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-23.5 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7m-213.4 85.4c-23.5 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c23.5 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7m106.7 0c-23.5 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c23.5 0 42.7 19.1 42.7 42.7s-19.2 42.7-42.7 42.7"></svg:path>`,
})
export class SubwayFile7Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
