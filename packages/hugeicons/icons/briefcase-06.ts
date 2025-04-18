import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBriefcase06Icon],svg[hugeicons-briefcase-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 15v1.5M3 11l.153 2.863c.164 3.614.246 5.42 1.406 6.529S7.527 21.5 11.145 21.5h1.71c3.618 0 5.427 0 6.586-1.108s1.242-2.915 1.406-6.529L21 11"></svg:path><svg:path d="M2.847 10.443C4.547 13.674 8.38 15 12 15s7.453-1.326 9.153-4.557C21.964 8.901 21.35 6 19.352 6H4.648c-1.998 0-2.612 2.9-1.8 4.443M16 6l-.088-.31c-.44-1.54-.66-2.31-1.184-2.75s-1.22-.44-2.611-.44h-.234c-1.391 0-2.087 0-2.61.44c-.525.44-.745 1.21-1.185 2.75L8 6"></svg:path></svg:g>`,
})
export class HugeiconsBriefcase06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
