import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListNumberedRtlIcon],svg[mdi-format-list-numbered-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13v-2h14v2zm0 6v-2h14v2zM3 7V5h14v2zm17 1V5h-1V4h2v4zm-1 9v-1h3v4h-3v-1h2v-.5h-1v-1h1V17zm2.25-7a.749.749 0 0 1 .54 1.27L20.12 13H22v1h-3v-.92L21 11h-2v-1z"></svg:path>`,
})
export class MdiFormatListNumberedRtlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
