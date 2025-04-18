import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersXIcon],svg[tdesign-letters-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.495 8.449A2 2 0 0 0 17 7.119V4h-2v3.12l-3 3.375L9 7.12V4H7v3.12a2 2 0 0 0 .505 1.329L10.662 12l-3.157 3.552A2 2 0 0 0 7 16.88V20h2v-3.12l3-3.375l3 3.375V20h2v-3.12a2 2 0 0 0-.505-1.328L13.338 12z"></svg:path>`,
})
export class TdesignLettersXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
