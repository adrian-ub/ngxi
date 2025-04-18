import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineClubsSymbolSolidIcon],svg[streamline-clubs-symbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 .25a3.036 3.036 0 0 0-3.036 3.036c0 .56.152 1.186.412 1.771a4 4 0 0 0-1.09-.164a3.036 3.036 0 0 0 0 6.071c.622 0 1.328-.187 1.967-.504l-.606 2.99a.25.25 0 0 0 .245.3h4.216a.25.25 0 0 0 .245-.3l-.606-2.99c.639.317 1.345.504 1.967.504a3.036 3.036 0 0 0 0-6.071c-.347 0-.72.058-1.09.164c.26-.585.412-1.212.412-1.771A3.036 3.036 0 0 0 7 .25" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineClubsSymbolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
