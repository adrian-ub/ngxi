import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMapPinXIcon],svg[lucide-map-pin-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.752 11.901A7.8 7.8 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0l.09-.077"></svg:path><svg:circle cx="12" cy="10" r="3"></svg:circle><svg:path d="m21.5 15.5l-5 5m5 0l-5-5"></svg:path></svg:g>`,
})
export class LucideMapPinXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
