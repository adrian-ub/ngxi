import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNicelockIcon],svg[arcticons-nicelock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.293 18.646l16.5-12.487a2 2 0 0 1 2.414 0l16.5 12.487a2 2 0 0 1 .793 1.595v18.005a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4V20.241a2 2 0 0 1 .793-1.595"></svg:path><svg:circle cx="24" cy="27" r="9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.46 28.386c.61 2.49 2.86 4.33 5.54 4.33s4.93-1.84 5.54-4.33m-9.732-3.716v-.946m8.384.946v-.946"></svg:path>`,
})
export class ArcticonsNicelockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
