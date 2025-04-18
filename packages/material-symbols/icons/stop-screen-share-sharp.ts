import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStopScreenShareSharpIcon],svg[material-symbols-stop-screen-share-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 23.3L18.2 21H1v-2h15.175l-1-1H2V4.85L.7 3.5l1.4-1.4l19.8 19.8zM10 12.85L8.175 11q-.125.225-.15.475T8 12v2h2zm10.7 5l-6.275-6.275L16 10l-3-3v2h-1.15l-6-6H22v14.85z"></svg:path>`,
})
export class MaterialSymbolsStopScreenShareSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
