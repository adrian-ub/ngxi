import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDeleteFilledIcon],svg[tdesign-delete-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3h9V1h-9zM22 6V4H2v2h2.029l.5 17h14.942l.5-17zM11 19V8h2v11z"></svg:path>`,
})
export class TdesignDeleteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
