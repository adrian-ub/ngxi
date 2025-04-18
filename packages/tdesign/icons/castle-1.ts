import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle1Icon],svg[tdesign-castle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v2h2V2h2v2h2V2h2v2h2V2h2v4h-1v8h3v-1h2v9H1v-9h2v1h3V6H5V2zm1 4v14h3v-7h2v7h3V6zm10 14h3v-4h-3zM6 20v-4H3v4zM9 7.998h2.004v2.004H9zm4 0h2.004v2.004H13z"></svg:path>`,
})
export class TdesignCastle1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
