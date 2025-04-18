import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGlassesOneIcon],svg[icon-park-solid-glasses-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="14.5" cy="24.5" r="6.5" fill="currentColor"></svg:circle><svg:circle r="6.5" fill="currentColor" transform="matrix(-1 0 0 1 33.5 24.5)"></svg:circle><svg:path d="M4 24h4m36 0h-4m-20-3c.5-2 2-4 4-4s3.5 2 4 4"></svg:path></svg:g>`,
})
export class IconParkSolidGlassesOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
