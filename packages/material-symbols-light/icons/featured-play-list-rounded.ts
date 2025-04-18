import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFeaturedPlayListRoundedIcon],svg[material-symbols-light-featured-play-list-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12.5h7q.213 0 .356-.144t.144-.357t-.144-.356T14 11.5H7q-.213 0-.356.144t-.144.357t.144.356T7 12.5m0-3h7q.213 0 .356-.144t.144-.357t-.144-.356T14 8.5H7q-.213 0-.356.144t-.144.357t.144.356T7 9.5M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z"></svg:path>`,
})
export class MaterialSymbolsLightFeaturedPlayListRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
