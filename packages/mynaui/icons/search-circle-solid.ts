import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchCircleSolidIcon],svg[mynaui-search-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.75 11.429a2.679 2.679 0 1 1 5.357 0a2.679 2.679 0 0 1-5.357 0"></svg:path><svg:path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m9.179-4.75a4.179 4.179 0 1 0 2.38 7.614l1.66 1.665a.75.75 0 1 0 1.062-1.059l-1.663-1.668a4.179 4.179 0 0 0-3.44-6.552"></svg:path></svg:g>`,
})
export class MynauiSearchCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
