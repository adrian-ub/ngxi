import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenLockPortraitIcon],svg[material-symbols-light-screen-lock-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.12 15.654q-.366 0-.628-.261q-.261-.262-.261-.628v-2.761q0-.366.261-.627q.262-.262.627-.262h.131v-1q0-.748.51-1.258q.511-.51 1.26-.51t1.258.51q.51.51.51 1.259v1h.131q.35 0 .6.26t.25.628v2.762q0 .365-.261.627q-.261.26-.627.26zm.9-4.538h2v-1q0-.425-.288-.713t-.713-.288t-.712.288t-.288.713zM7.615 22q-.691 0-1.153-.462T6 20.385V3.615q0-.69.463-1.152T7.616 2h8.769q.69 0 1.152.463T18 3.616v16.769q0 .69-.462 1.153T16.384 22zM7 18.5h10v-13H7z"></svg:path>`,
})
export class MaterialSymbolsLightScreenLockPortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
