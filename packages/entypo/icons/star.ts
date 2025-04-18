import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoStarIcon],svg[entypo-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 1.3l2.388 6.722H18.8l-5.232 3.948l1.871 6.928L10 14.744l-5.438 4.154l1.87-6.928l-5.233-3.948h6.412z"></svg:path>`,
})
export class EntypoStarIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
