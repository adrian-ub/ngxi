import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCloseFullscreenIcon],svg[material-symbols-light-close-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.689 21L3 20.312L10.312 13H5v-1h7v7h-1v-5.312zM12 12V5h1v5.312L20.312 3l.688.688L13.688 11H19v1z"></svg:path>`,
})
export class MaterialSymbolsLightCloseFullscreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
