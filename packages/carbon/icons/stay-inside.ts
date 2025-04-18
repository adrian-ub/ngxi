import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStayInsideIcon],svg[carbon-stay-inside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 30h-2v-2a3.003 3.003 0 0 0-3-3h-4a3.003 3.003 0 0 0-3 3v2H9v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zm-7-17a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path><svg:path fill="currentColor" d="M30 30h-2V14.464L16 4.31L4 14.464V30H2V14a1 1 0 0 1 .354-.763l13-11a1 1 0 0 1 1.292 0l13 11A1 1 0 0 1 30 14Z"></svg:path>`,
})
export class CarbonStayInsideIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
