import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBinocularsIcon],svg[hugeicons-binoculars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.537 15.79v-.02l-2.92-9.89c-.37-1.26-1.56-2.14-2.89-2.14c-.83 0-1.61.33-2.18.93a2.95 2.95 0 0 0-.83 2.19l.05.89h-3.6l.05-.89a2.99 2.99 0 0 0-3-3.11c-1.33 0-2.52.88-2.89 2.14l-2.93 9.89v.02c-.11.38-.17.78-.17 1.19a4.26 4.26 0 0 0 4.25 4.25c2.34 0 4.09-1.77 4.22-4h4.55c.13 2.23 1.97 4 4.22 4s4.25-1.91 4.25-4.25c0-.41-.06-.81-.17-1.19zm-6.92-10.1c.29-.3.68-.47 1.1-.47c.67 0 1.27.44 1.45 1.07l2.01 6.79c-.53-.23-1.11-.36-1.72-.36c-1.11 0-2.13.43-2.88 1.13l-.36-7.09c-.02-.4.13-.78.41-1.08zm-1.78 3.54l.33 6.5h-4.42l.33-6.5zM5.747 6.3a1.52 1.52 0 0 1 2.55-.6c.28.29.43.67.41 1.07l-.37 7.1c-.76-.7-1.77-1.13-2.88-1.13c-.61 0-1.19.13-1.72.36l2.01-6.79zm-.29 13.43c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75m13 0c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75" color="currentColor"></svg:path>`,
})
export class HugeiconsBinocularsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
