import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsRockOnIcon],svg[akar-icons-rock-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m19 16l.87-11.735a2.102 2.102 0 0 0-4.181-.433L15 9m-7 2l-.713-4.279a2.06 2.06 0 0 0-4.083.525L4 16m8-3v-1.5a2 2 0 1 0-4 0V15"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 13v-2a2 2 0 1 0-4 0v2"></svg:path><svg:path d="M19 16c-.536 4-3.358 6-7.5 6S4 20 4 16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.692 17H11a2 2 0 1 1 0-4h4c2.21 0 4.5 2 3.5 5"></svg:path></svg:g>`,
})
export class AkarIconsRockOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
