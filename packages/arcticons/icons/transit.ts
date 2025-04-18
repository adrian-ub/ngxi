import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTransitIcon],svg[arcticons-transit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.446 7.63v6.961M39.554 40.37v-7.165m0-14.234v-3.549h0a7.777 7.777 0 1 0-15.554 0v17.156a7.777 7.777 0 1 1-15.554 0v-3.753"></svg:path><svg:ellipse cx="8.446" cy="21.708" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.946" ry="3.955"></svg:ellipse><svg:ellipse cx="39.554" cy="26.088" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.946" ry="3.955"></svg:ellipse>`,
})
export class ArcticonsTransitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
