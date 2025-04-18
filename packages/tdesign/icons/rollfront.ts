import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRollfrontIcon],svg[tdesign-rollfront-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.07 14A7 7 0 0 0 10 20h8.5v-2H10a5 5 0 0 1 0-10h7.086l-2.5 2.5L16 11.914L20.914 7L16 2.086L14.586 3.5l2.5 2.5H10a7 7 0 0 0-7 7v1z"></svg:path>`,
})
export class TdesignRollfrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
