import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGibbousMoonIcon],svg[hugeicons-gibbous-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 14.469A8.107 8.107 0 0 1 9.531 3.5A9.12 9.12 0 1 0 20.5 14.469m1-2.469A9.5 9.5 0 0 0 12 2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsGibbousMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
