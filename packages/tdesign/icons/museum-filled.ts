import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMuseumFilledIcon],svg[tdesign-museum-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v4.327l4-.444V14h-5v8H2V8.105l4-.444zm2 5.438l8-.889V4H8zm-2 3.56v2.004h2.004v-2.004zm4 0v2.004h2.004v-2.004z"></svg:path><svg:path fill="currentColor" d="M19 22h3v-6h-3z"></svg:path>`,
})
export class TdesignMuseumFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
