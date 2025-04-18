import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMobileScreenShareIcon],svg[material-symbols-light-mobile-screen-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 14.808V13.5q0-1.038.73-1.77T12 11h1.192V9.692L15 11.5l-1.808 1.808V12H12q-.617 0-1.059.441q-.441.442-.441 1.059v1.308zM7.616 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM7 18.5h10v-13H7z"></svg:path>`,
})
export class MaterialSymbolsLightMobileScreenShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
