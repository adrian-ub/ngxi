import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsTailwindcssIcon],svg[lineicons-tailwindcss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 9.969q1-4.063 5-4.063c4 0 4.5 3.047 6.5 3.555q2 .508 3.5-1.524Q21 12 17 12c-4 0-4.5-3.047-6.5-3.555Q8.5 7.938 7 9.97m-5 6.094Q3 12 7 12c4 0 4.5 3.047 6.5 3.555q2 .507 3.5-1.524q-1 4.063-5 4.063c-4 0-4.5-3.047-6.5-3.555q-2-.508-3.5 1.524" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsTailwindcssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
