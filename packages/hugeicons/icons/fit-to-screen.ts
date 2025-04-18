import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFitToScreenIcon],svg[hugeicons-fit-to-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 20.902c-.41 0-.75-.34-.75-.75v-16c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75m18 0c-.41 0-.75-.34-.75-.75v-16c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75m-5.91-5.22c.15.15.34.22.53.22s.38-.07.53-.22l.88-.88c1.11-1.11 1.72-1.72 1.72-2.65s-.61-1.54-1.72-2.65l-.88-.88a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.88.88l.197.197c.245.243.456.453.623.643H7.22c.22-.24.49-.51.82-.84l.88-.88c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-.88.88c-1.11 1.11-1.72 1.72-1.72 2.65s.61 1.54 1.72 2.65l.88.88c.29.29.77.29 1.06 0s.29-.77 0-1.06l-.88-.88l-.198-.196c-.245-.244-.455-.453-.622-.644h9.57c-.22.24-.49.51-.82.84l-.88.88c-.29.29-.29.77 0 1.06" color="currentColor"></svg:path>`,
})
export class HugeiconsFitToScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
