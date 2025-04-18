import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJlabIcon],svg[arcticons-jlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24H7.5l4.125-7.145h6.188l-1.65 2.858h4.125L26.063 9.71h6.187zm0 0l8.25-14.289l4.125 7.145l-3.094 5.358l-1.65-2.858l-2.062 3.573l5.775 10.003l-3.094 5.358z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 24l8.25 14.289H24l-3.094-5.358h3.3l-2.062-3.573h-11.55L7.5 24z"></svg:path>`,
})
export class ArcticonsJlabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
