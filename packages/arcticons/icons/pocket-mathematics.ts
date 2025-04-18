import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPocketMathematicsIcon],svg[arcticons-pocket-mathematics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 5.5a5 5 0 0 0-3.535 8.535l27 27a5 5 0 0 0 7.07-7.07l-27-27A5 5 0 0 0 10.5 5.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 16.932l9.965-9.965A5 5 0 0 1 37.5 5.502h0a5 5 0 0 1 3.535 8.535l-9.965 9.965M24 31.072l-9.965 9.964a5 5 0 0 1-7.07-7.07l9.965-9.965"></svg:path>`,
})
export class ArcticonsPocketMathematicsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
