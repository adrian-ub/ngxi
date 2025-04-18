import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFile6Icon],svg[subway-file-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M322 0v128h128zm-21.3 0H66v288l64-64l85.3 85.3l85.3-85.3l85.3 85.3l64-64v-96H300.7zm0 309.3l-85.3 85.3l-85.4-85.3l-64 64V512h384V330.7l-64 64z"></svg:path>`,
})
export class SubwayFile6Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
