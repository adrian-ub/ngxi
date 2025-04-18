import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsFlashlightIcon],svg[akar-icons-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 4v1c0 1.636 2 4 3 5l.75 9.01A3.26 3.26 0 0 0 12 22v0a3.26 3.26 0 0 0 3.25-2.99L16 10c1-1 3-3.364 3-5V4m-7 7v2"></svg:path><svg:ellipse cx="12" cy="4" rx="7" ry="2"></svg:ellipse></svg:g>`,
})
export class AkarIconsFlashlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
