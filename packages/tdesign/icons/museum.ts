import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMuseumIcon],svg[tdesign-museum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v4.327l4-.444V22H2V8.105l4-.444zm2 5.438l8-.889V4H8zM18 20h2v-5h-2zm2-7V8.117L4 9.895V20h12v-7zM6 10.998h2.004v2.004H6zm4 0h2.004v2.004H10z"></svg:path>`,
})
export class TdesignMuseumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
