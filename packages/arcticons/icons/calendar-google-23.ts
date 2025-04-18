import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarGoogle23Icon],svg[arcticons-calendar-google-23-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17.419 22.5c0-1.667 1.333-3 2.889-3s3 1.333 3 3c0 .778-.334 1.556-.89 2.111c-1.221 1-5 3.889-5 3.889h5.89m5.051-4.556c1.222 0 2.222 1 2.222 2.223h0c0 1.222-1 2.222-2.222 2.222h-.889c-1.555 0-2.111-.222-2.778-.778"></svg:path><svg:path d="M24.692 20.278c.667-.556 1.334-.778 2.778-.778h.89c1.221 0 2.221 1 2.221 2.222h0c0 1.222-1 2.222-2.222 2.222h-2.222"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h24l9-9v-24a4 4 0 0 0-4-4m-5 0v37m-19-28v28m28-9h-37m37-19h-28"></svg:path>`,
})
export class ArcticonsCalendarGoogle23Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
