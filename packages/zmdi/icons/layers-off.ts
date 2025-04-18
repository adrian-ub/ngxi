import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLayersOffIcon],svg[zmdi-layers-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m380 304l-31-31l26-19l30 30zm-10-101l-51 40L151 75l62-48l192 149zM27 5l400 400l-27 27l-81-81l-106 82L21 284l35-27l157 123l76-59l-31-30l-45 34L56 203l-35-27l69-54L0 32z"></svg:path>`,
})
export class ZmdiLayersOffIcon {
  readonly viewBox = input("0 0 432 440")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
