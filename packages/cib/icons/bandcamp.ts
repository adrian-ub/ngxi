import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibBandcampIcon],svg[cib-bandcamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 25L9.917 7H32l-9.917 18z"></svg:path>`,
})
export class CibBandcampIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
