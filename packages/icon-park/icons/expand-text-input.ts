import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExpandTextInputIcon],svg[icon-park-expand-text-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M22 42H6V26"></svg:path><svg:path d="M26 6H42V22"></svg:path></svg:g>`,
})
export class IconParkExpandTextInputIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
