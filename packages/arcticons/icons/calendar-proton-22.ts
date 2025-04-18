import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarProton22Icon],svg[arcticons-calendar-proton-22-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.885 23.91a4.943 4.943 0 0 1 4.815-5a4.976 4.976 0 0 1 3.518 8.518c-2.037 1.667-8.333 6.482-8.333 6.482H17.7m2.307-10a4.943 4.943 0 0 1 4.815-5a4.976 4.976 0 0 1 3.519 8.519c-2.037 1.666-8.334 6.481-8.334 6.481h9.815"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 25.793v-13.93a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v24.275a4 4 0 0 0 4 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 36.138V11.862a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v24.276a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.207 40.138V15.819a3.14 3.14 0 0 0-3.138-3.138H4.5"></svg:path>`,
})
export class ArcticonsCalendarProton22Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
