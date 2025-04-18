import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity8Icon],svg[tdesign-city-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h12v8h8v12H2zm10 8V8H9v2zm-3 2v2h3v-2zm-2-2V8H4v2zm-3 2v2h3v-2zm0 4v4h8v-4zm10 4h2v-4h2v4h2v-8h-6zM4 6h3V4H4zm5-2v2h3V4z"></svg:path>`,
})
export class TdesignCity8Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
