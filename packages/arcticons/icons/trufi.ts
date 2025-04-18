import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrufiIcon],svg[arcticons-trufi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.162" cy="33.027" r="2.808" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.957 38.702l.442 2.503a2.115 2.115 0 0 1-1.716 2.45l-1.225.216a2.115 2.115 0 0 1-2.45-1.716l-.774-4.387"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.572 5.298c9.942-1.753 12.674 2.685 13.339 6.456l2.901 16.453a6.54 6.54 0 0 1-5.305 7.577l-17.39 3.066a6.54 6.54 0 0 1-7.577-5.305L7.639 17.09c-.665-3.77.384-8.875 10.326-10.628Z"></svg:path><svg:circle cx="34.412" cy="29.985" r="2.808" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.666 35.932l.442 2.503a2.115 2.115 0 0 0 2.45 1.716l1.225-.216a2.115 2.115 0 0 0 1.716-2.45l-.774-4.388"></svg:path>`,
})
export class ArcticonsTrufiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
