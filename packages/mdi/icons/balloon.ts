import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBalloonIcon],svg[mdi-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.16 12.74L14 14h-1.5c-.15 2.71-.5 5.41-1 8.08l-1-.16c.5-2.62.84-5.26 1-7.92H10l.84-1.26C8.64 11.79 7 8.36 7 6a5 5 0 0 1 5-5a5 5 0 0 1 5 5c0 2.36-1.64 5.79-3.84 6.74"></svg:path>`,
})
export class MdiBalloonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
