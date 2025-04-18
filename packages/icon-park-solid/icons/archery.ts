import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidArcheryIcon],svg[icon-park-solid-archery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M13 42c9.941 0 18-8.059 18-18S22.941 6 13 6"></svg:path><svg:circle cx="9" cy="24" r="3" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 24h30m-4-4l4 4l-4 4"></svg:path></svg:g>`,
})
export class IconParkSolidArcheryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
