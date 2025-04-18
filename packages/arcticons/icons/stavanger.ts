import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStavangerIcon],svg[arcticons-stavanger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.687 16.325l4.172 4.463l1.533 21.621h28.424L42.5 15.248H10.51m.245-.944L42.402 8.86l-.592-2.676l-1.414-.592l-23.468 3.344l-1.09 1.08l-8.237 1.57l-.045.008"></svg:path><svg:circle cx="8.131" cy="14.127" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.113 23.657l-2.709 8.179l-2.709-8.179m-6.806 7.283c.501.653 1.13.896 2.005.896h1.211a2.04 2.04 0 0 0 2.04-2.04v-.01a2.04 2.04 0 0 0-2.04-2.04H18.77a2.043 2.043 0 0 1-2.043-2.042h0c0-1.13.916-2.047 2.047-2.047h1.204c.875 0 1.504.243 2.006.896m13.925 1.813a2.71 2.71 0 0 0-2.71-2.71h0a2.71 2.71 0 0 0-2.71 2.71v2.76a2.71 2.71 0 0 0 2.71 2.71h0a2.71 2.71 0 0 0 2.71-2.71h-2.71"></svg:path><svg:circle cx="8.131" cy="14.127" r="2.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsStavangerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
