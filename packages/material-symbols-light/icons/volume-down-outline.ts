import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVolumeDownOutlineIcon],svg[material-symbols-light-volume-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14v-4h3.423L13 6.423v11.154L9.423 14zm9.77 1.308V8.642q.817.525 1.273 1.424q.457.898.457 1.934t-.457 1.91t-1.274 1.398M12 8.85L9.85 11H7v2h2.85L12 15.15zM9.5 12"></svg:path>`,
})
export class MaterialSymbolsLightVolumeDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
