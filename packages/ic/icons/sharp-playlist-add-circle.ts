import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPlaylistAddCircleIcon],svg[ic-sharp-playlist-add-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M7 7h7v2H7zm3 8H7v-2h3zm-3-3v-2h7v2zm12 3h-2v2h-2v-2h-2v-2h2v-2h2v2h2z"></svg:path>`,
})
export class IcSharpPlaylistAddCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
