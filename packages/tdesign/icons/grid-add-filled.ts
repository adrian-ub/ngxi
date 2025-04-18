import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGridAddFilledIcon],svg[tdesign-grid-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2H2v9h9zm11 0h-9v9h9zM11 13H2v9h9zm7.5 0h-2v3.5H13v2h3.5V22h2v-3.5H22v-2h-3.5z"></svg:path>`,
})
export class TdesignGridAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
