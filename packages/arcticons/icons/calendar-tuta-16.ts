import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarTuta16Icon],svg[arcticons-calendar-tuta-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m16.125 22.78l4.206-1.98m0 0l-4.403 14.4m14.045-9.6c2.65 0 4.143 2.149 3.332 4.8s-3.616 4.8-6.267 4.8s-4.143-2.149-3.333-4.8s3.617-4.8 6.268-4.8"></svg:path><svg:path d="M35.164 22.578c-.386-1.067-1.413-1.778-3.368-1.778h-.356c-2.666 0-5.452 2.133-6.267 4.8l-1.468 4.8"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 42.27h28.377L42.5 13.893H14.123zm37-28.428H14.123L5.5 5.73h28.377zM5.5 42.27V5.73"></svg:path>`,
})
export class ArcticonsCalendarTuta16Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
