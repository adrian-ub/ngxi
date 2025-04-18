import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEndpointRoundIcon],svg[icon-park-outline-endpoint-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 24H26"></svg:path><svg:circle cx="22" cy="24" r="3"></svg:circle><svg:path d="M42 40H22c-8.837 0-16-7.163-16-16S13.163 8 22 8h20"></svg:path></svg:g>`,
})
export class IconParkOutlineEndpointRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
