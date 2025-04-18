import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxEditAltIcon],svg[bx-edit-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413zm-3-3l1.587 1.585l-1.59 1.584l-1.586-1.585zM6 16v-1.585l7.04-7.018l1.586 1.586L7.587 16zm-2 4h16v2H4z"></svg:path>`,
})
export class BxEditAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
