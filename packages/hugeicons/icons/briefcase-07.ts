import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBriefcase07Icon],svg[hugeicons-briefcase-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v1.5M3 15c.15 2.933.306 4.472 1.398 5.445C5.583 21.5 7.431 21.5 11.126 21.5h1.748c3.696 0 5.543 0 6.728-1.055C20.694 19.472 20.85 17.933 21 15M2.847 10.443C4.547 13.674 8.38 15 12 15s7.453-1.326 9.153-4.557C21.964 8.901 21.35 6 19.352 6H4.648c-1.998 0-2.612 2.9-1.8 4.443M16 6l-.088-.31c-.44-1.54-.66-2.31-1.184-2.75s-1.22-.44-2.611-.44h-.234c-1.391 0-2.087 0-2.61.44c-.525.44-.745 1.21-1.185 2.75L8 6" color="currentColor"></svg:path>`,
})
export class HugeiconsBriefcase07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
