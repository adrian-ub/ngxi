import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScallionIcon],svg[icon-park-solid-scallion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 24s2.5-4.5 3-9s-1-8-1-8l5-3s1 6 1 9"></svg:path><svg:path fill="currentColor" d="M6 43c-2-1.5-2-6.91 2-10s4.186-2.283 9-6S34 4 34 4l4.5 3.5l-12.19 16.24c-2.984 3.977-3.758 9.313-6.26 13.61C18.102 40.7 16 42 14 43s-6 1.5-8 0"></svg:path><svg:path d="M23 30s3-2 7-4s13-2 13-2l-3-7s-8 0-11 3"></svg:path></svg:g>`,
})
export class IconParkSolidScallionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
