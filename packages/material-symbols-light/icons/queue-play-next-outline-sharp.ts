import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightQueuePlayNextOutlineSharpIcon],svg[material-symbols-light-queue-play-next-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.5 21.73l-.73-.73l3-3l-3-3l.73-.73L23.23 18zM9 20v-2H3V4h18v8h-1V5H4v12h13v1h-2.23v2zm2.5-5.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3zM4 17V5z"></svg:path>`,
})
export class MaterialSymbolsLightQueuePlayNextOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
