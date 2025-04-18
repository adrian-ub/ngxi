import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTownIcon],svg[tdesign-town-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h5.442L11 5.913V2h5.468L22 8.638V22H2zm11 2v16h7V9.362L15.532 4zm-2 16V8.887L6.558 4H4v16zM6 7.998h2.004v2.004H6zm9 0h2.004v2.004H15zm-9 4h2.004v2.004H6zm9 0h2.004v2.004H15zm-9 4h2.004v2.004H6zm9 0h2.004v2.004H15z"></svg:path>`,
})
export class TdesignTownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
