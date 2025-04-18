import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDriveExportOutlineIcon],svg[material-symbols-light-drive-export-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.9 19.789l-.688-.689l3.575-3.6H16.5v-1h5v5h-1v-3.292zM5.885 20.5q-.349 0-.7-.205t-.512-.497l-2.115-3.702q-.162-.292-.172-.699t.172-.699L8.673 4.202q.18-.293.522-.497q.341-.205.69-.205h4.23q.349 0 .69.205q.341.204.522.497l3.935 6.761q-.287-.034-.563-.027t-.568.05L14.35 4.5h-4.7L3.3 15.4l2.35 4.1h7.842q.121.287.272.527t.357.473zm1.653-4l-.436-.775l4.402-7.667h.992l2.506 4.38q-.194.171-.374.367t-.34.39L12 9.2l-3.615 6.3h4.754q-.08.244-.119.485q-.04.24-.058.515z"></svg:path>`,
})
export class MaterialSymbolsLightDriveExportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
