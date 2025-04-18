import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestCamMagnetMountSharpIcon],svg[material-symbols-nest-cam-magnet-mount-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 16.3q-.825 0-1.412-.587T21 14.3v-4q0-.85.588-1.425T23 8.3h1v8zm-10-5.025q0 1-.375 1.913t-1.1 1.637L7.25 19.1L.175 12.05l4.275-4.3q.725-.725 1.638-1.1T8 6.275q2.1 0 3.55 1.45t1.45 3.55m3.95 4.075L15.9 14.3l1.2-1.2H14v-1.5h3.2l-1.25-1.25L17 9.3l3 3z"></svg:path>`,
})
export class MaterialSymbolsNestCamMagnetMountSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
