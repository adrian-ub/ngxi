import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons22sevenIcon],svg[arcticons-22seven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14.34" cy="24" r="6.976" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.66" cy="24" r="6.976" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.364 24H3.5m41 0h-3.864m-19.729-2.325a6.7 6.7 0 0 1 3.198-.805c1.084 0 2.115.258 3.016.72"></svg:path>`,
})
export class Arcticons22sevenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
