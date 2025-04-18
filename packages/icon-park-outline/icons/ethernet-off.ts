import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEthernetOffIcon],svg[icon-park-outline-ethernet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke-linejoin="round" d="M19 27h10v6H19zm-5-8h20v8H14z"></svg:path><svg:path d="M33 19v-4m-6 4v-4m-6 4v-4m-6 4v-4"></svg:path></svg:g>`,
})
export class IconParkOutlineEthernetOffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
