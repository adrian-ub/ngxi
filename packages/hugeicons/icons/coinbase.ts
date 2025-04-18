import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoinbaseIcon],svg[hugeicons-coinbase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.034 22.063c-5.39 0-9.78-4.37-9.78-9.75s4.39-9.75 9.78-9.75c4.99 0 9.17 3.73 9.71 8.67c.02.21-.04.42-.19.58a.75.75 0 0 1-.56.25h-4.57c-.35 0-.65-.24-.73-.58c-.4-1.72-1.9-2.92-3.67-2.92c-2.08 0-3.77 1.68-3.77 3.75s1.69 3.75 3.77 3.75c1.76 0 3.27-1.2 3.67-2.92c.08-.34.38-.58.73-.58h4.57c.21 0 .42.09.56.25s.21.37.19.58c-.55 4.94-4.73 8.67-9.71 8.67m0-18c-4.57 0-8.28 3.7-8.28 8.25s3.71 8.25 8.28 8.25c3.94 0 7.28-2.74 8.09-6.5h-3.13c-.74 2.09-2.7 3.5-4.96 3.5c-2.91 0-5.27-2.36-5.27-5.25s2.36-5.25 5.27-5.25c2.26 0 4.23 1.41 4.96 3.5h3.13c-.81-3.76-4.15-6.5-8.09-6.5" color="currentColor"></svg:path>`,
})
export class HugeiconsCoinbaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
