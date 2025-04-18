import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDetectorOfflineOutlineSharpIcon],svg[material-symbols-light-detector-offline-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.4 20l-.688-.688l2.6-2.6l-2.6-2.6l.688-.689l2.6 2.6l2.6-2.6l.689.689l-2.6 2.6l2.6 2.6L14.6 20L12 17.4zM5 5v1.77h14V5zm2.523 2.77l.646 1.769h7.662l.646-1.77zm-.092 2.769l-.97-2.77H4V4h16v3.77h-2.461l-1.074 2.769zM5 5v1.77z"></svg:path>`,
})
export class MaterialSymbolsLightDetectorOfflineOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
