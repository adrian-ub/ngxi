import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageInboxStarIcon],svg[mage-inbox-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2.75 12H6a2 2 0 0 1 2 2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2a2 2 0 0 1 2-2h3.25"></svg:path><svg:path d="M21.25 10.375v4.875a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h4.875"></svg:path><svg:path stroke-linejoin="round" d="m19.107 1.864l-.31.924a2.36 2.36 0 0 1-1.505 1.505l-.934.31a.157.157 0 0 0 0 .3l.934.31a2.36 2.36 0 0 1 1.493 1.493l.31.936a.157.157 0 0 0 .298 0l.322-.924a2.36 2.36 0 0 1 1.492-1.493l.935-.31a.157.157 0 0 0 0-.3l-.923-.322a2.36 2.36 0 0 1-1.504-1.505l-.31-.935a.157.157 0 0 0-.298.011"></svg:path></svg:g>`,
})
export class MageInboxStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
