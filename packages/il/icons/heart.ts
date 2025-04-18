import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilHeartIcon],svg[il-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M651 55q29 27 44 61t15 71t-13 71t-42 63L371 605q-7 7-16 7t-17-7L54 321q-27-28-40-63T1 187t14-71t42.5-61T121 17t70-11t70 16t61 42l33 33l33-33q27-27 61-42t70-16t70 11t62 38"></svg:path>`,
})
export class IlHeartIcon {
  readonly viewBox = input("0 0 710 780")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
