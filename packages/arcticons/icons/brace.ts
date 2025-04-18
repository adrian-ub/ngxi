import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBraceIcon],svg[arcticons-brace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.881 8.55v30.76c0 1.978 1.101 3.19 3.303 3.19h20.191c7.474 0 13.589-15.873 3.28-20.357c7.592-4.376 4.99-16.631-2.431-16.631c-5.067 0-21.528-.012-21.528-.012c-2.046 0-2.815.968-2.815 3.05"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:ellipse cx="17.132" cy="19.712" rx="3.644" ry="3.639"></svg:ellipse><svg:ellipse cx="27.287" cy="19.712" rx="3.644" ry="3.639"></svg:ellipse><svg:ellipse cx="27.287" cy="29.944" rx="3.644" ry="3.639"></svg:ellipse><svg:ellipse cx="17.132" cy="29.944" rx="3.644" ry="3.639"></svg:ellipse></svg:g>`,
})
export class ArcticonsBraceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
