import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7CompassFillIcon],svg[f7-compass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M28 52C14.745 52 4 41.255 4 28S14.745 4 28 4s24 10.745 24 24s-10.745 24-24 24m3.637-20.363L38.91 17.09l-14.547 7.273L17.09 38.91zm-10.713 3.44l4.766-9.534l4.767 4.767z"></svg:path>`,
})
export class F7CompassFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
