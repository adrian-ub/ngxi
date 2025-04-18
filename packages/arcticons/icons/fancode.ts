import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFancodeIcon],svg[arcticons-fancode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.432 26.75l-.013.07c-.538 3.056-3.453 5.534-6.51 5.534h0c-3.056 0-5.097-2.478-4.558-5.535l.994-5.638c.54-3.057 3.454-5.535 6.51-5.535h0c3.057 0 5.098 2.478 4.559 5.535l-.012.068M13.973 24h5.43M12.5 32.354l2.946-16.708h8.353"></svg:path>`,
})
export class ArcticonsFancodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
