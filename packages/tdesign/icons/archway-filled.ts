import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArchwayFilledIcon],svg[tdesign-archway-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v1h12V2h2v1h1v2h-.78l.6 3H22v2h-1v10h1v2H2v-2h1V10H2V8h1.18l.6-3H3V3h1V2zm13 8h-3v10h3zm-5 10V10h-4v10zm-6 0V10H5v10z"></svg:path>`,
})
export class TdesignArchwayFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
