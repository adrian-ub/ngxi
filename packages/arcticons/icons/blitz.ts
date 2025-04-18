import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlitzIcon],svg[arcticons-blitz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.51 22.819L9.487 8.796a.49.49 0 0 0-.692 0c-7.25 7.25-8.369 18.621-2.672 27.147s16.63 11.843 26.103 7.92s14.86-14 12.86-24.057S34.251 2.5 23.997 2.5a.49.49 0 0 0-.489.489v8.082"></svg:path><svg:circle cx="23.448" cy="35.176" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="11.395" cy="23.449" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="35.5" cy="23.449" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsBlitzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
