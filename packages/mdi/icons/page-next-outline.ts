import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPageNextOutlineIcon],svg[mdi-page-next-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H5a2 2 0 0 0-2 2v4h2V5h17v14H5v-4H3v4a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M7 15v-2H0v-2h7V9l4 3zm13-2h-7v-2h7zm0-4h-7V7h7zm-3 8h-4v-2h4z"></svg:path>`,
})
export class MdiPageNextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
