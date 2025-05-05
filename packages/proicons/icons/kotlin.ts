import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsKotlinIcon],svg[proicons-kotlin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M4.456 5.25a1.5 1.5 0 0 1 1.5-1.5h12.586c.89 0 1.337 1.077.707 1.707L12.706 12l6.543 6.543c.63.63.184 1.707-.707 1.707H5.956a1.5 1.5 0 0 1-1.06-.44a1.5 1.5 0 0 1-.44-1.06zm8.25-1.5L4.456 12m8.25 0l-7.81 7.81"></svg:path>`,
})
export class ProiconsKotlinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
