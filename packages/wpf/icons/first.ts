import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfFirstIcon],svg[wpf-first-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.125 0H4.875A4.874 4.874 0 0 0 0 4.875v16.25A4.874 4.874 0 0 0 4.875 26h16.25A4.874 4.874 0 0 0 26 21.125V4.875A4.874 4.874 0 0 0 21.125 0M18 17.949a.96.96 0 0 1-.479.817a.99.99 0 0 1-.952.039L11 14.382V18c0 .551-.449 1-1 1H8c-.551 0-1-.449-1-1V8c0-.551.449-1 1-1h2c.551 0 1 .449 1 1v3.618l5.569-4.425a.99.99 0 0 1 .952.04c.29.174.479.485.479.817z"></svg:path>`,
})
export class WpfFirstIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
