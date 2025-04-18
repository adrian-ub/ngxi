import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAutodeskIcon],svg[simple-icons-autodesk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.129 20.202l14.7-9.136h7.625c.235 0 .445.188.445.445c0 .21-.092.305-.21.375l-7.222 4.323c-.47.283-.633.845-.633 1.265l-.008 2.725H24V4.362a.56.56 0 0 0-.585-.562h-8.752L0 12.893V20.2h.129z"></svg:path>`,
})
export class SimpleIconsAutodeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
