import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCogIcon],svg[majesticons-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M11 2a2 2 0 0 0-2 2v.757l-.707.707L9 4.757l-.536-.535a2 2 0 0 0-2.828 0L4.222 5.636a2 2 0 0 0 0 2.828L4.757 9H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h.757l-.535.536a2 2 0 0 0 0 2.828l1.414 1.414a2 2 0 0 0 2.828 0l-.707-.707l.707.707l.536-.535V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-.757l.536.535a2 2 0 0 0 2.828 0l1.414-1.414a2 2 0 0 0 0-2.829L19.243 15H20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-.757l.535-.536a2 2 0 0 0 0-2.828l-1.414-1.414a2 2 0 0 0-2.828 0L15 4.757V4a2 2 0 0 0-2-2h-2zm5 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0zm-4 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
