import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOfflineShareSharpIcon],svg[material-symbols-light-offline-share-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 21.385V5.538h1v14.847h9.23v1zm3-3v-16h10v16zm1-3.5h8v-9h-8zm1.48-2.924V9.327h3.574l-1.008-1.008l.627-.627L16.25 9.77l-2.077 2.077l-.627-.627l1.008-1.008h-2.688v1.75z"></svg:path>`,
})
export class MaterialSymbolsLightOfflineShareSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
