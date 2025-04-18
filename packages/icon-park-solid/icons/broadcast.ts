import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBroadcastIcon],svg[icon-park-solid-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M24 28.63a4.54 4.54 0 0 0 4.546-4.532A4.54 4.54 0 0 0 24 19.567a4.54 4.54 0 0 0-4.545 4.53A4.54 4.54 0 0 0 24 28.63Z"></svg:path><svg:path stroke-linecap="round" d="M16 15c-5.333 4.97-5.333 13.03 0 18m16 0c5.333-4.97 5.333-13.03 0-18M9.858 10c-7.81 7.786-7.81 20.41 0 28.196m28.284 0c7.81-7.786 7.81-20.41 0-28.196"></svg:path></svg:g>`,
})
export class IconParkSolidBroadcastIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
