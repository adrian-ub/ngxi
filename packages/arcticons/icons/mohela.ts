import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMohelaIcon],svg[arcticons-mohela-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.574 20.965v6.07h3.034M8 27.028v-6.063l3.035 6.07l3.034-6.06v6.06m7.33-6.07v6.07m4.021-6.07v6.07m-4.021-3.046h4.021m1.678.011h1.978m1.056 3.035h-3.034v-6.07h3.034"></svg:path><svg:rect width="4.021" height="6.069" x="15.724" y="20.965" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.01" ry="2.01"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.334 25.024h-2.689m-.666 2.011l2.011-6.07l2.01 6.07"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMohelaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
