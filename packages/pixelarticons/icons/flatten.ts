import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFlattenIcon],svg[pixelarticons-flatten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v8h2v2h-2v2h-2v-2H9v-2h2zm-2 8H7V8h2zm6 0V8h2v2zm5 6H4v2h16zm-4 4H8v2h8z"></svg:path>`,
})
export class PixelarticonsFlattenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
