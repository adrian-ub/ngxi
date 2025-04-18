import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsSunIcon],svg[akar-icons-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M12 3V2m0 20v-1m9-9h1M2 12h1m15.5-6.5L20 4M4 20l1.5-1.5M4 4l1.5 1.5m13 13L20 20"></svg:path><svg:circle cx="12" cy="12" r="4"></svg:circle></svg:g>`,
})
export class AkarIconsSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
