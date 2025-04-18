import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIherbIcon],svg[arcticons-iherb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M13.046 19.572v9.384m6.217-9.384v9.384m-6.217-4.71h6.217"></svg:path><svg:circle cx="10.321" cy="19.865" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.321 22.739v6.217m18.67-3.889a2.346 2.346 0 0 1 2.346-2.346h0m-2.346 0v6.217m-2.751-1.184a2.35 2.35 0 0 1-2.04 1.184h0a2.346 2.346 0 0 1-2.345-2.346v-1.525a2.346 2.346 0 0 1 2.346-2.346h0a2.346 2.346 0 0 1 2.346 2.346v.763h-4.692m11.953-.763a2.346 2.346 0 0 1 2.346-2.346h0a2.346 2.346 0 0 1 2.346 2.346v1.525a2.346 2.346 0 0 1-2.346 2.346h0a2.346 2.346 0 0 1-2.346-2.346m0 2.346v-9.383"></svg:path>`,
})
export class ArcticonsIherbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
