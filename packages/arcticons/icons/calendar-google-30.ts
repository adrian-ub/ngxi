import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarGoogle30Icon],svg[arcticons-calendar-google-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M24.692 25.5c0 1.667 1.334 3 3 3s2.89-1.333 2.89-3v-3c0-1.667-1.334-3-2.89-3s-3 1.333-3 3zm-3.607-1.556c1.223 0 2.223 1 2.223 2.223h0c0 1.222-1 2.222-2.223 2.222h-.889c-1.555 0-2.11-.222-2.777-.778"></svg:path><svg:path d="M17.419 20.278c.667-.556 1.333-.778 2.778-.778h.889c1.222 0 2.222 1 2.222 2.222h0c0 1.222-1 2.222-2.222 2.222h-2.223"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h24l9-9v-24a4 4 0 0 0-4-4m-5 0v37m-19-28v28m28-9h-37m37-19h-28"></svg:path>`,
})
export class ArcticonsCalendarGoogle30Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
