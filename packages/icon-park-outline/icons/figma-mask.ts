import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFigmaMaskIcon],svg[icon-park-outline-figma-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path d="M14 41.324C19.978 37.866 24 31.403 24 24S19.978 10.134 14 6.676C8.022 10.134 4 16.597 4 24s4.022 13.866 10 17.324"></svg:path></svg:g>`,
})
export class IconParkOutlineFigmaMaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
