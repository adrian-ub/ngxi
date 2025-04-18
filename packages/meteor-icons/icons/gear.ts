import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGearIcon],svg[meteor-icons-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path d="M10 21a1 1 0 0 0 4 0a1.8 1.8 0 0 1 3-1.3a1 1 0 0 0 2.8-2.7a1.8 1.8 0 0 1 1.2-3a1 1 0 0 0 0-4a1.8 1.8 0 0 1-1.2-3A1 1 0 0 0 17 4.4A1.8 1.8 0 0 1 14 3a1 1 0 0 0-4 0a1.8 1.8 0 0 1-3 1.4A1 1 0 0 0 4.2 7A1.8 1.8 0 0 1 3 10a1 1 0 0 0 0 4a1.8 1.8 0 0 1 1.2 3A1 1 0 0 0 7 19.7a1.8 1.8 0 0 1 3 1.3"></svg:path></svg:g>`,
})
export class MeteorIconsGearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
