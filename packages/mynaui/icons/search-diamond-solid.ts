import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchDiamondSolidIcon],svg[mynaui-search-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.75 11.429a2.679 2.679 0 1 1 5.357 0a2.679 2.679 0 0 1-5.357 0"></svg:path><svg:path d="M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m.639 5.76a4.179 4.179 0 1 0 2.38 7.614l1.66 1.665a.75.75 0 1 0 1.062-1.059l-1.663-1.668a4.179 4.179 0 0 0-3.44-6.552"></svg:path></svg:g>`,
})
export class MynauiSearchDiamondSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
