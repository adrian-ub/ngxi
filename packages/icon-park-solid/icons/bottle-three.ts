import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBottleThreeIcon],svg[icon-park-solid-bottle-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21.188 10h5.625L33 21.18V44H15V21.18z"></svg:path><svg:path fill="currentColor" d="M20 4h8v6h-8z"></svg:path><svg:rect width="6" height="12" x="21" y="23" fill="currentColor" rx="3"></svg:rect></svg:g>`,
})
export class IconParkSolidBottleThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
