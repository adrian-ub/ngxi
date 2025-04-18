import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineExchangeTwoIcon],svg[icon-park-outline-exchange-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 18v24h30V18L24 6zm15 12v6m7-10v10m-14-4v4"></svg:path><svg:path d="m17 25l5-4l3 3l6-5"></svg:path></svg:g>`,
})
export class IconParkOutlineExchangeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
