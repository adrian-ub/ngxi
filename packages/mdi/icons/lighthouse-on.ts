import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLighthouseOnIcon],svg[mdi-lighthouse-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 10V2l9 3v2zm7 0V8h5V4H8V3l4-2l4 2v1h-1v4h1v2h-1.26l-6.3 3.64L9 10zM7 23l.04-.24l9.11-5.26l.52 3.38L13 23zm1.05-6.83L15.31 12l.52 3.37l-8.4 4.85z"></svg:path>`,
})
export class MdiLighthouseOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
