import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSunriseIcon],svg[icon-park-outline-sunrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24h3m3-14l2 2m12-8v3M14 24c0-5.522 4.478-10 10-10s10 4.478 10 10a9.99 9.99 0 0 1-4.215 8.158M38 10l-2 2m8 12h-3m-3.019 13.982l-1.62-1.62"></svg:path><svg:path d="M23.5 28c-3 0-9.5.2-9.5 3s4.606 2.79 7 3c2 .175 5.462 1.688 5 4c-1 5-17 4-21 4"></svg:path></svg:g>`,
})
export class IconParkOutlineSunriseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
