import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarGoogle14Icon],svg[arcticons-calendar-google-14-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.795 20.738l2.25-1.238m0 0v9m7.035 0v-9l-4.838 6.075h5.963"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h24l9-9v-24a4 4 0 0 0-4-4m-5 0v37m-19-28v28m28-9h-37m37-19h-28"></svg:path>`,
})
export class ArcticonsCalendarGoogle14Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
