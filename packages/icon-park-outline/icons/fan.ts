import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFanIcon],svg[icon-park-outline-fan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 31v5m-9.987-8.245l-9.986-3.244a21 21 0 0 1 39.945 0l-9.986 3.244zm0 0a10.5 10.5 0 0 1 3.815-5.25zm0 0L24 31zm3.815-5.25A10.5 10.5 0 0 1 24 20.5zm0 0L24 31zM24 20.5a10.5 10.5 0 0 1 6.171 2.005zm0 0V31zm6.171 2.005a10.5 10.5 0 0 1 3.815 5.25zm0 0L24 31zm3.815 5.25L24 31z"></svg:path>`,
})
export class IconParkOutlineFanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
