import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWebTrafficIcon],svg[material-symbols-web-traffic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12v-2h3v2zm3.4 5.55L4 16.1L6.1 14l1.45 1.4zM6.1 8L4 5.9l1.4-1.45L7.55 6.6zM18 20l-4.75-4.75L12 19L9 9l10 3l-3.7 1.3L20 18zM10 6V3h2v3zm5.9 2l-1.45-1.4l2.15-2.15l1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsWebTrafficIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
