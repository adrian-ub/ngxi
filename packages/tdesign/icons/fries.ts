import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFriesIcon],svg[tdesign-fries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.465.994L21 4.53l-.707.707l2.122 2.121l-2.122 2.121l2.122 2.122l-3.2 3.2l1.397 1.397L8.845 23.26L.741 15.156l7.06-11.768l1.514 1.514L13.222.994l2.122 2.121zM12.85 8.437l.707.707l4.614-4.614l-.707-.707zm6.028-1.786l-3.907 3.907l.707.707l3.907-3.907zm-1.786 6.028l.707.707l1.786-1.785l-.707-.707zm.294 3.122L8.198 6.613l-1.94 3.232l7.897 7.896zm-5 3l-7.189-7.188l-1.939 3.232l5.896 5.896zM10.729 6.315l.708.707l2.492-2.492l-.707-.707z"></svg:path>`,
})
export class TdesignFriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
