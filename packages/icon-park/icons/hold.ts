import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHoldIcon],svg[icon-park-hold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 24L26 26C26 26 41 23 43 23C45 23 45 25 43 27C41 29 34 35 28 35C22 35 18 32 14 32C10 32 4 32 4 32"></svg:path><svg:path d="M4 20C6 18 10 15 14 15C18 15 27.5 19 29 21C30.5 23 26 26 26 26"></svg:path></svg:g>`,
})
export class IconParkHoldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
