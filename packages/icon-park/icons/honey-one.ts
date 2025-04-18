import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHoneyOneIcon],svg[icon-park-honey-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="11" height="5" x="4.929" y="13.224" rx="2" transform="rotate(-46.025 4.929 13.224)"></svg:rect><svg:rect width="11" height="5" x="19.321" y="27.111" rx="2" transform="rotate(-46.025 19.321 27.11)"></svg:rect><svg:rect width="17" height="5" x="6.443" y="18.855" rx="2" transform="rotate(-46.025 6.443 18.855)"></svg:rect><svg:rect width="17" height="5" x="13.641" y="25.798" rx="2" transform="rotate(-46.025 13.64 25.798)"></svg:rect><svg:rect width="25" height="5" x="7.265" y="25.205" rx="2" transform="rotate(-46.025 7.265 25.205)"></svg:rect><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M25.0029 28.4238L29.169 24.106L43.5756 38.0062L39.4095 42.3241L25.0029 28.4238Z"></svg:path><svg:path stroke-linejoin="round" d="M21 40.25C21 42.3211 19.2091 44 17 44C14.7909 44 13 42.3211 13 40.25C13 38.1789 17 34 17 34C17 34 21 38.1789 21 40.25Z"></svg:path></svg:g>`,
})
export class IconParkHoneyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
