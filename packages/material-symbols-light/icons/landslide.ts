import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLandslideIcon],svg[material-symbols-light-landslide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-3.442l3 .973l9.698-3.214L20 21zm3-3.53l-3-.985V13.75l3 .973L11.189 13l3.588 1.544zm11.885-4.24l3.346-1.5V9.193l-3.25-.73l-1.75 1.403v2.039zM6 13.663l-3-.985V9h4.5l2.575 3.329zm6.116-6.008L16 6.096v-3.5l-3.788-.769L10 3.307v2.924z"></svg:path>`,
})
export class MaterialSymbolsLightLandslideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
