import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCursorFilledIcon],svg[tdesign-cursor-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.97 9.039L3.108 3.114l5.925 16.863l3.378-4.728l5.773 5.773l2.829-2.828l-5.774-5.775z"></svg:path>`,
})
export class TdesignCursorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
