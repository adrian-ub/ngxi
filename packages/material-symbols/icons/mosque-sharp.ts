import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMosqueSharpIcon],svg[material-symbols-mosque-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8.05V7.1q0-1 .475-1.85t1.275-1.4L12 1l4.25 2.85q.8.55 1.275 1.4T18 7.1v.95zM1 21V8.725Q.55 8.45.275 8.013T0 7t.6-1.4T2 4q.8.775 1.4 1.6T4 7t-.275 1.013T3 8.724V13h2V9.05h14V13h2V8.725q-.45-.275-.725-.712T20 7t.6-1.4T22 4q.8.775 1.4 1.6T24 7t-.275 1.013t-.725.712V21h-9v-6h-4v6z"></svg:path>`,
})
export class MaterialSymbolsMosqueSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
