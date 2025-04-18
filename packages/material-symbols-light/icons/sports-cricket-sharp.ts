import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSportsCricketSharpIcon],svg[material-symbols-light-sports-cricket-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 16.854L2.433 7.825l3.392-3.392l9.01 9.086zm7.1 4.454l-4.327-4.327l.708-.708l4.327 4.327zm-.096-13.039q-1.146 0-1.96-.81t-.813-1.955t.81-1.96t1.956-.813t1.959.81t.813 1.956t-.81 1.959t-1.955.813"></svg:path>`,
})
export class MaterialSymbolsLightSportsCricketSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
