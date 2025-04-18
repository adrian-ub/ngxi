import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiFarm11Icon],svg[maki-farm-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6 5L4 4L2 5L1 7v3h1.5V8h3v2H7V7zM5 7H3V5.5h2V7z" fill="currentColor"></svg:path><svg:path d="M10 2a1 1 0 0 0-2 0v8h2V2z" fill="currentColor"></svg:path>`,
})
export class MakiFarm11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
