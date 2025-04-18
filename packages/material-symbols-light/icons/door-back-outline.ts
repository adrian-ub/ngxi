import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDoorBackOutlineIcon],svg[material-symbols-light-door-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-1h2V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19h2v1zm3-1h10V5.616q0-.231-.192-.424T16.384 5H7.616q-.231 0-.424.192T7 5.616zm2.77-6.23q.309 0 .539-.23t.23-.54t-.23-.54t-.54-.23t-.54.23T9 12t.23.54t.54.23M7 5v14z"></svg:path>`,
})
export class MaterialSymbolsLightDoorBackOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
