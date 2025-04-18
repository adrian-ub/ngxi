import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEarthquakeSharpIcon],svg[material-symbols-light-earthquake-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.775 21l-2.583-8.5H3v-1h3.937L9.1 18.517L12.566 3h.753l2.542 10.867l1.914-6.156h.714L19.93 11.5h1.05v1h-1.777L18.19 9.748l-2.043 6.54h-.756l-2.45-10.532L9.55 21z"></svg:path>`,
})
export class MaterialSymbolsLightEarthquakeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
