import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRollOfPaperIcon],svg[openmoji-roll-of-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M11.41 56.6c8.303 12.49 32.7 6.093 39.05 3.446l.7-44.25c-.953-3.003-22.19-15.83-39.75-.375z"></svg:path><svg:path fill="#d0cfce" d="M47.37 61.41c4.514-3.053 13.23-9.667 13.23-9.667v-38.44c-2.321 2.072-9.972 5.775-13.23 6.769"></svg:path><svg:ellipse cx="30.85" cy="15.3" fill="#fff" rx="4.666" ry="2.13"></svg:ellipse><svg:g fill="none" stroke="#000" stroke-width="2"><svg:ellipse cx="31.23" cy="15.32" stroke-miterlimit="10" rx="20.18" ry="7.368"></svg:ellipse><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.05 14.93v41.76c0 4.074 9.037 7.363 20.18 7.363c6.02 0 10.53-.695 14.26-1.873c8.515-2.892 15.46-10.42 15.46-10.42V12.78c-3.73 3.326-13.38 6.865-13.38 6.865"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31.23 22.69v3.32"></svg:path><svg:path stroke-dasharray="5.213 5.213" stroke-linecap="round" stroke-linejoin="round" d="M31.23 32.96v24.29"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31.23 60.72v3.33"></svg:path><svg:ellipse cx="30.79" cy="15.31" stroke-linecap="round" stroke-linejoin="round" rx="4.739" ry="2.16"></svg:ellipse></svg:g>`,
})
export class OpenmojiRollOfPaperIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
