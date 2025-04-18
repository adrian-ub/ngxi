import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineIncreaseIcon],svg[icon-park-outline-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M41 25c0 9.941-8.059 18-18 18S5 34.941 5 25S13.059 7 23 7"></svg:path><svg:path d="M12 28.5c8.5 0 12-.5 19-9.5"></svg:path><svg:path d="M23 19h8v8m0-22v4.5M43.5 17H39m1.89-10L37 10.89"></svg:path></svg:g>`,
})
export class IconParkOutlineIncreaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
