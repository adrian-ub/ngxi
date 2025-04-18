import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsTrademarkIcon],svg[flat-color-icons-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21" fill="#9C27B0"></svg:circle><svg:path fill="#E1BEE7" d="M20.6 18.5h-4.2v14.2h-3.5V18.5H8.7v-2.9h11.9zm6.5-2.9L30.3 28l3.2-12.4H38v17.1h-3.5v-4.6l.3-7.1l-3.4 11.8H29L25.7 21l.3 7.1v4.6h-3.5V15.6z"></svg:path>`,
})
export class FlatColorIconsTrademarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
