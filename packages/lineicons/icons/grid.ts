import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsGridIcon],svg[lineicons-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 34.2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7V18.6h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7V7.3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v6.8H34.2V7.3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v6.8H15.5V7.3c0-1.2-1-2.2-2.2-2.2S11 6.1 11 7.3v6.8H4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h7v11.1H4c-1.2 0-2.2 1-2.2 2.2S2.8 34 4 34h7v11.1H4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h7v6.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-6.8h14.3v6.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-6.8h14.3v6.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-6.8h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7V34.2zM48.5 18.6v11.1H34.2V18.6zm-33 0h14.3v11.1H15.5zm0 26.8V34.2h14.3v11.1H15.5zm33 0H34.2V34.2h14.3z"></svg:path>`,
})
export class LineiconsGridIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
