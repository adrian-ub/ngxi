import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggOpenCollectiveIcon],svg[gg-open-collective-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="m16.682 15.753l2.13 2.13A8.97 8.97 0 0 0 21 12a8.96 8.96 0 0 0-2.123-5.806l-2.133 2.133A5.97 5.97 0 0 1 18 12c0 1.42-.493 2.725-1.318 3.753"></svg:path><svg:path d="M15.673 16.745a6 6 0 1 1 .08-9.426l2.13-2.13a9 9 0 1 0-.077 13.689z"></svg:path></svg:g>`,
})
export class GgOpenCollectiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
