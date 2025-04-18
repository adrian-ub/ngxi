import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenLockLandscapeIcon],svg[material-symbols-light-screen-lock-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.12 15.654q-.366 0-.628-.261q-.261-.262-.261-.628v-2.761q0-.366.261-.627q.262-.262.627-.262h.131v-1q0-.748.51-1.258q.511-.51 1.26-.51t1.258.51q.51.51.51 1.259v1h.131q.35 0 .6.26t.25.628v2.762q0 .365-.261.627q-.261.26-.627.26zm.9-4.538h2v-1q0-.425-.288-.713t-.713-.288t-.712.288t-.288.713zM3.615 18q-.691 0-1.153-.462T2 16.384V7.616q0-.691.463-1.153T3.616 6h16.769q.69 0 1.153.463T22 7.616v8.769q0 .69-.462 1.153T20.385 18zM5.5 17h13V7h-13z"></svg:path>`,
})
export class MaterialSymbolsLightScreenLockLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
