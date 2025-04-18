import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siCodeLineIcon],svg[si-code-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 6l-6 6l6 6m8 0l6-6l-6-6"></svg:path>`,
})
export class SiCodeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
