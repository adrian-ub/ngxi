import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeSpeakerIcon],svg[material-symbols-home-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.2 12l.775-5.825q.05-.275.213-.488t.412-.312l7.9-3.15q.45-.2.875.063t.475.762L17.925 12zm3.375 9Q7.75 21 6.55 19.638t-.95-3.163L5.925 14H18.15l.3 2.525q.2 1.8-.975 3.138T14.5 21z"></svg:path>`,
})
export class MaterialSymbolsHomeSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
