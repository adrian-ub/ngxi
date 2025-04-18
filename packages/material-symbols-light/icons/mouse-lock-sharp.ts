import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMouseLockSharpIcon],svg[material-symbols-light-mouse-lock-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.48 21v-4.538h1v-1q0-.748.511-1.259t1.259-.51t1.259.51t.51 1.259v1H20V21zm1.77-4.538h2v-1q0-.425-.288-.713t-.712-.288t-.712.288t-.288.713zM6 9.077q0-2.356 1.575-4.078T11.5 3.094v5.983zm6.5 0V3.094q2.35.183 3.925 1.905T18 9.077zM12 21q-2.507 0-4.253-1.747Q6 17.508 6 15v-4.923h12v1.446q-.187-.03-.365-.046q-.179-.015-.385-.015q-2.075 0-3.537 1.462t-1.463 3.538v4.52q-.062.012-.122.015T12 21"></svg:path>`,
})
export class MaterialSymbolsLightMouseLockSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
