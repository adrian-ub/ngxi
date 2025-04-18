import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAngelOneIcon],svg[arcticons-angel-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m8.857 41.446l3.358-5.815H5.5z"></svg:path><svg:path d="m15.457 41.446l3.357-5.815h-6.715zm6.715 0l3.357-5.815h-6.715zm6.715 0l3.357-5.815h-6.715z"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.099 35.631l3.358-5.816H8.742zm6.715 0l3.358-5.816h-6.715zm6.715 0l3.358-5.816h-6.715zm-10.072-5.816L18.814 24h-6.715zm6.715 0L25.529 24h-6.715zM18.814 24l3.358-5.815h-6.715z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.814 12.369l16.788 29.077H42.5L22.172 6.554z"></svg:path>`,
})
export class ArcticonsAngelOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
