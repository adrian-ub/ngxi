import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemUnlockedIcon],svg[tdesign-system-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h22v10h-2V3H3v13h10v2H1zm18.502 13.5c-.69 0-1.25.56-1.25 1.25v.75H24V23h-9v-6.5h1.252v-.75a3.25 3.25 0 0 1 5.54-2.305l.71.705l-1.41 1.418l-.71-.705a1.24 1.24 0 0 0-.88-.363M17 18.5V21h5v-2.5zM2.25 21H13v2H2.25z"></svg:path>`,
})
export class TdesignSystemUnlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
