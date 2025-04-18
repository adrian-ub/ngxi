import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRupeeCircleIcon],svg[mynaui-rupee-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M9 7.5h6m-6 2.778h6M13.25 17.5L9 13.056h1.5c3.334 0 3.334-5.556 0-5.556"></svg:path></svg:g>`,
})
export class MynauiRupeeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
