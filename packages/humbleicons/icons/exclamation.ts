import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsExclamationIcon],svg[humbleicons-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13.253 5.98L12 13.5l-1.253-7.52a1.27 1.27 0 1 1 2.506 0"></svg:path><svg:circle cx="12" cy="19" r="1" stroke-width="2"></svg:circle></svg:g>`,
})
export class HumbleiconsExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
