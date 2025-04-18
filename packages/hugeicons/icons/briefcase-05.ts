import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBriefcase05Icon],svg[hugeicons-briefcase-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m3 11l.153 3.227c.164 3.442.246 5.162 1.406 6.218C5.719 21.5 7.527 21.5 11.145 21.5h1.71c3.618 0 5.427 0 6.586-1.055c1.16-1.056 1.242-2.776 1.406-6.218L21 11"></svg:path><svg:path d="M2.847 10.443C4.547 13.674 8.38 15 12 15s7.453-1.326 9.153-4.557C21.964 8.901 21.35 6 19.352 6H4.648c-1.998 0-2.612 2.9-1.8 4.443M12 11h.009M16 6l-.088-.31c-.44-1.54-.66-2.31-1.184-2.75s-1.22-.44-2.611-.44h-.234c-1.391 0-2.087 0-2.61.44c-.525.44-.745 1.21-1.185 2.75L8 6"></svg:path></svg:g>`,
})
export class HugeiconsBriefcase05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
