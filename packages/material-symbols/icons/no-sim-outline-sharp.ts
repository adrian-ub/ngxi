import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNoSimOutlineSharpIcon],svg[material-symbols-no-sim-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 17.175l-2-2V4h-7.15l-2 2L7.4 4.6L10 2h10zm.5 6.125L6 8.8V20h12v-2.025l2 2V22H4V8l.6-.6L.7 3.5l1.425-1.4L21.9 21.875zm-8.85-8.825"></svg:path>`,
})
export class MaterialSymbolsNoSimOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
