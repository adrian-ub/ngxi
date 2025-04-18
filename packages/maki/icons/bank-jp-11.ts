import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiBankJp11Icon],svg[maki-bank-jp-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8.826 2.48L6.892 4.75H8a.5.5 0 0 1 0 1H6.25v1H8a.5.5 0 0 1 0 1H6.25V9a.75.75 0 0 1-1.5 0V7.75H3a.5.5 0 0 1 0-1h1.75v-.999H3a.5.5 0 0 1 0-1h1.107l-1.933-2.27a.75.75 0 0 1 1.152-.961L5.5 4.078L7.674 1.52a.75.75 0 1 1 1.152.96z" fill="currentColor"></svg:path>`,
})
export class MakiBankJp11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
