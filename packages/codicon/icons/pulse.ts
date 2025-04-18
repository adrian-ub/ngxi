import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconPulseIcon],svg[codicon-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.8 9L10 3H9L7.158 9.64L5.99 4.69h-.97L3.85 9H1v.99h3.23l.49-.37l.74-2.7L6.59 12h1.03l1.87-7.04l1.46 4.68l.48.36H15V9z"></svg:path>`,
})
export class CodiconPulseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
