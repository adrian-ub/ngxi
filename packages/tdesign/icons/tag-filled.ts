import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTagFilledIcon],svg[tdesign-tag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.979 13.12l9.899 9.9L21 12.915V2.998l-9.9.017zm14.017-4.116V7H17v2.004z"></svg:path>`,
})
export class TdesignTagFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
