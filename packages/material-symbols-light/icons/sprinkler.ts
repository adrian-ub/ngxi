import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSprinklerIcon],svg[material-symbols-light-sprinkler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.77q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m0-4q-.31 0-.54-.23T11.23 7t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m0-4q-.31 0-.54-.23T11.23 3t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m3 10q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m2.825-2.85q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m2.825-2.8q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23M9 13.77q-.31 0-.54-.23T8.23 13t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m-2.825-2.85q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23M3.35 8.12q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23M11.5 21.5v-4h-4v-1h9v1h-4v4z"></svg:path>`,
})
export class MaterialSymbolsLightSprinklerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
