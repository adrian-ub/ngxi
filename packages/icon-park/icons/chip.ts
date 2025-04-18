import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChipIcon],svg[icon-park-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="24" height="36" x="12" y="6" fill="#2F88FF" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 12H6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 20H6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 28H6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 36H6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 12H36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 20H36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 28H36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 36H36"></svg:path></svg:g>`,
})
export class IconParkChipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
