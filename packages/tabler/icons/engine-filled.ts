import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEngineFilledIcon],svg[tabler-engine-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4a1 1 0 0 1 0 2h-1v1h.383a2 2 0 0 1 1.787 1.106L16.62 11H17v-1a1 1 0 0 1 .883-.993L18 9h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a1 1 0 0 1-1-1v-1h-1v1a2 2 0 0 1-1.85 1.995L14 20h-3.465a2 2 0 0 1-1.664-.89L7.464 17H6a1 1 0 0 1-.993-.883L5 16v-2H4v2a1 1 0 0 1-2 0v-6a1 1 0 1 1 2 0v2h1v-2a1 1 0 0 1 1-1h1.584l1.709-1.707a1 1 0 0 1 .576-.284L10 7h1V6h-1a1 1 0 1 1 0-2z"></svg:path>`,
})
export class TablerEngineFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
