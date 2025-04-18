import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarGoogle27Icon],svg[arcticons-calendar-google-27-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.4 22.5c0-1.667 1.334-3 2.89-3s3 1.333 3 3c0 .778-.334 1.556-.89 2.111c-1.222 1-5 3.889-5 3.889h5.89m2.472 0l4.838-9h-5.963"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h24l9-9v-24a4 4 0 0 0-4-4m-5 0v37m-19-28v28m28-9h-37m37-19h-28"></svg:path>`,
})
export class ArcticonsCalendarGoogle27Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
