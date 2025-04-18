import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMapPinIcon],svg[meteor-icons-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="7" r="6"></svg:circle><svg:path d="M12 13v10"></svg:path></svg:g>`,
})
export class MeteorIconsMapPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
