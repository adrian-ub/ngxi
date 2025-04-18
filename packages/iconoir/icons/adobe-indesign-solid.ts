import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAdobeIndesignSolidIcon],svg[iconoir-adobe-indesign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.75 17A4.75 4.75 0 0 1 17 21.75H7A4.75 4.75 0 0 1 2.25 17V7A4.75 4.75 0 0 1 7 2.25h10A4.75 4.75 0 0 1 21.75 7zM8.5 16.75a.75.75 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-.75.75m5-4h1.25v2.5H13.5a1.25 1.25 0 1 1 0-2.5m0 4a2.75 2.75 0 1 1 0-5.5h1.25V9a.75.75 0 0 1 1.5 0v6.4a1.35 1.35 0 0 1-1.35 1.35z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirAdobeIndesignSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
