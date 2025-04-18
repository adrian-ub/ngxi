import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsGlobeIcon],svg[akar-icons-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"></svg:ellipse><svg:path d="M2 12h20"></svg:path></svg:g>`,
})
export class AkarIconsGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
