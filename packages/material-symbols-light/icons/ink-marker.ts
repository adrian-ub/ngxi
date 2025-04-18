import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInkMarkerIcon],svg[material-symbols-light-ink-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.839 20.016l-.835-.835l-.82.819q-.244.244-.575.247q-.332.003-.57-.247q-.245-.244-.245-.573t.244-.573l.82-.82l-.835-.846L16.681 4.531q.242-.243.552-.243t.551.243l1.724 1.723q.242.242.242.552t-.242.552zm4.261-8.477l-5.661 5.65L6.85 18.6l5.65-5.661z"></svg:path>`,
})
export class MaterialSymbolsLightInkMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
