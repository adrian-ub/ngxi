import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVolumeMuteOutlineIcon],svg[material-symbols-light-volume-mute-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14v-4h3.423L15 6.423v11.154L11.423 14zm1-1h2.85L14 15.15v-6.3L11.85 11H9zm2.5-1"></svg:path>`,
})
export class MaterialSymbolsLightVolumeMuteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
