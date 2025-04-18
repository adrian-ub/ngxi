import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarTuta26Icon],svg[arcticons-calendar-tuta-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.605 25.6c.815-2.667 3.6-4.8 6.09-4.8s4.147 2.133 3.332 4.8c-.38 1.244-1.294 2.489-2.455 3.378c-2.444 1.6-9.902 6.222-9.902 6.222h9.422m11.101-9.6c2.651 0 4.143 2.149 3.333 4.8s-3.617 4.8-6.268 4.8s-4.143-2.149-3.332-4.8s3.616-4.8 6.267-4.8"></svg:path><svg:path d="M36.384 22.578c-.385-1.067-1.412-1.778-3.368-1.778h-.355c-2.667 0-5.453 2.133-6.268 4.8l-1.467 4.8"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 42.27h28.377L42.5 13.893H14.123zm37-28.428H14.123L5.5 5.73h28.377zM5.5 42.27V5.73"></svg:path>`,
})
export class ArcticonsCalendarTuta26Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
