import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCompassSolidIcon],svg[mynaui-compass-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m10.186 13.814l.907-2.721l2.721-.907l-.907 2.721z"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.462-2.763a.75.75 0 0 0-.95-.949l-4.5 1.5a.75.75 0 0 0-.473.475l-1.5 4.5a.75.75 0 0 0 .948.948l4.5-1.5a.75.75 0 0 0 .474-.474z"></svg:path></svg:g>`,
})
export class MynauiCompassSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
