import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsMouseIcon],svg[lineicons-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 1.8c-11.2 0-20.2 9.9-20.2 22.1v16.2c0 12.2 9.1 22.1 20.2 22.1c5.2 0 10.1-2.1 13.8-5.9c4.2-4.2 6.5-10.2 6.4-16.3V23.9c0-12.2-9.1-22.1-20.2-22.1m15.7 22.1V25H34.4V6.5c7.6 1.3 13.3 8.6 13.3 17.4M29.9 6.4V25H16.2v-1.1c0-9 6-16.4 13.7-17.5m12.7 46.8c-2.9 2.9-6.7 4.5-10.6 4.5c-8.7 0-15.7-7.9-15.7-17.6V29.5h31.5v10.6c0 5-1.9 9.8-5.2 13.1"></svg:path>`,
})
export class LineiconsMouseIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
