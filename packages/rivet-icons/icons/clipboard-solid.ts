import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsClipboardSolidIcon],svg[rivet-icons-clipboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h3v14H1V2zm6 1V2H6v1zM5 7v2h6V7zm0 3v2h6v-2z"></svg:path>`,
})
export class RivetIconsClipboardSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
