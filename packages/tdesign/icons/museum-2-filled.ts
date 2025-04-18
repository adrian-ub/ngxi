import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMuseum2FilledIcon],svg[tdesign-museum-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 1.798l4 2.667v6.355l12-2V22h-5v-4h-4v4H2V4.465z"></svg:path>`,
})
export class TdesignMuseum2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
