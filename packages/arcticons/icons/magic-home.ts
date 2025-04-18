import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMagicHomeIcon],svg[arcticons-magic-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.075 39.332H8.57v-13.92H5.5l9.834-9.836l7.004 7.005H42.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.206 19.447l3.117-3.118l6.249 6.25m-1.994-10.701c1.57-1.996 4.339-3.21 7.321-3.21c2.98 0 5.748 1.212 7.318 3.206m-12.364 2.457a6.93 6.93 0 0 1 5.046-2.17c1.915 0 3.744.787 5.046 2.17m-7.69 2.593c.778-.773 1.7-1.188 2.644-1.188s1.866.415 2.644 1.188"></svg:path><svg:circle cx="33.899" cy="19.495" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsMagicHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
