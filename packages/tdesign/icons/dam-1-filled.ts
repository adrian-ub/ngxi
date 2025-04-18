import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDam1FilledIcon],svg[tdesign-dam-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20v-9.9C21 5.09 17.042 1 12 1s-9 4.09-9 9.1V20H2v2h8v-2H9v-9.9a3 3 0 1 1 6 0V20h-1v2h8v-2z"></svg:path>`,
})
export class TdesignDam1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
