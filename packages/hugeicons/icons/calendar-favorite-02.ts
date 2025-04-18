import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCalendarFavorite02Icon],svg[hugeicons-calendar-favorite-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 2v2M6 2v2M3 8h18M2.5 12.243c0-4.357 0-6.536 1.252-7.89C5.004 3 7.02 3 11.05 3h1.9c4.03 0 6.046 0 7.298 1.354C21.5 5.707 21.5 7.886 21.5 12.244v.513c0 4.357 0 6.536-1.252 7.89C18.996 22 16.98 22 12.95 22h-1.9c-4.03 0-6.046 0-7.298-1.354C2.5 19.293 2.5 17.114 2.5 12.756z"></svg:path><svg:path d="m12.605 12.006l.616 1.242a.76.76 0 0 0 .496.37l1.117.187c.714.12.882.642.367 1.157l-.867.875a.77.77 0 0 0-.182.64l.248 1.082c.196.858-.255 1.19-1.008.741l-1.046-.624a.75.75 0 0 0-.693 0l-1.047.624c-.749.448-1.203.113-1.008-.74l.249-1.084a.77.77 0 0 0-.182-.639l-.868-.875c-.51-.515-.346-1.037.368-1.157l1.116-.187a.76.76 0 0 0 .493-.37l.616-1.242c.336-.675.882-.675 1.215 0"></svg:path></svg:g>`,
})
export class HugeiconsCalendarFavorite02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
