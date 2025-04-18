import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDetectorOfflineSharpIcon],svg[material-symbols-light-detector-offline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.4 20l-.688-.688l2.6-2.6l-2.6-2.6l.688-.689l2.6 2.6l2.6-2.6l.689.689l-2.6 2.6l2.6 2.6L14.6 20L12 17.4zM7.523 7.77l.646 1.769h7.662l.646-1.77zm-.092 2.769l-.97-2.77H4V4h16v3.77h-2.461l-1.074 2.769z"></svg:path>`,
})
export class MaterialSymbolsLightDetectorOfflineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
