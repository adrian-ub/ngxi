import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarTuta6Icon],svg[arcticons-calendar-tuta-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M24.768 25.6c2.651 0 4.143 2.149 3.333 4.8s-3.617 4.8-6.268 4.8s-4.143-2.149-3.332-4.8s3.616-4.8 6.267-4.8"></svg:path><svg:path d="M29.959 22.578c-.385-1.067-1.412-1.778-3.368-1.778h-.356c-2.666 0-5.452 2.133-6.267 4.8l-1.467 4.8"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 42.27h28.377L42.5 13.893H14.123zm37-28.428H14.123L5.5 5.73h28.377zM5.5 42.27V5.73"></svg:path>`,
})
export class ArcticonsCalendarTuta6Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
