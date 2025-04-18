import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineConcernIcon],svg[icon-park-outline-concern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-width="4" d="M10.858 9.858A19.94 19.94 0 0 0 5 24a19.94 19.94 0 0 0 5.858 14.142m28.284 0A19.94 19.94 0 0 0 45 24a19.94 19.94 0 0 0-5.858-14.142M34.9 33.9A13.96 13.96 0 0 0 39 24a13.96 13.96 0 0 0-4.1-9.9m-19.8 0A13.96 13.96 0 0 0 11 24a13.96 13.96 0 0 0 4.1 9.9"></svg:path><svg:path stroke-linejoin="round" stroke-width="3.5" d="M28.182 20C30.29 20 32 21.612 32 23.6c0 2.588-2.546 4.8-3.818 6Q26.908 30.8 25 32q-1.909-1.2-3.182-2.4C20.545 28.4 18 26.188 18 23.6c0-1.988 1.71-3.6 3.818-3.6c1.328 0 2.498.64 3.182 1.61c.684-.97 1.854-1.61 3.182-1.61Z"></svg:path></svg:g>`,
})
export class IconParkOutlineConcernIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
