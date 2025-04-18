import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsUngroupIcon],svg[pixelarticons-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3H3v4h4zm0 14H3v4h4zM17 3h4v4h-4zm4 14h-4v4h4zM8 8h2v2H8zm4 2h-2v4H8v2h2v-2h4v2h2v-2h-2v-4h2V8h-2v2z"></svg:path>`,
})
export class PixelarticonsUngroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
