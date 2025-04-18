import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkThreeIcon],svg[icon-park-link-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="18" x="34.607" y="3.494" rx="2" transform="rotate(45 34.607 3.494)"></svg:rect><svg:rect width="14" height="18" x="16.223" y="21.879" rx="2" transform="rotate(45 16.223 21.879)"></svg:rect><svg:path stroke-linecap="round" d="M31.0723 16.929L16.9301 31.0711"></svg:path></svg:g>`,
})
export class IconParkLinkThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
