import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge6FilledIcon],svg[tdesign-bridge-6-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 1.754l-11 9.9l-11-9.9V21h2v-7h2v7h2v-7h10v7h2v-7h2v7h2z"></svg:path>`,
})
export class TdesignBridge6FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
