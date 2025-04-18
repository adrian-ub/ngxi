import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBandcampIcon],svg[la-bandcamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16S9.935 5 16 5m-2.617 7l-4 8h9.234l4-8zm1.234 2h4.766l-2 4h-4.766z"></svg:path>`,
})
export class LaBandcampIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
