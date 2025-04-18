import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHomeSpeakerIcon],svg[material-symbols-light-home-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.027 12.404l.737-5.748q.03-.217.154-.391t.336-.255l6.727-2.766q.373-.161.711.043t.389.61l.96 8.507zM9.767 20Q8.25 20 7.3 18.82t-.738-2.71l.344-2.706H17.15l.3 2.794q.162 1.511-.763 2.657T14.25 20z"></svg:path>`,
})
export class MaterialSymbolsLightHomeSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
