import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsLetrinaNegativeIcon],svg[healthicons-letrina-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsLetrinaNegative0)"><svg:path d="M21 11h6l-6.518.033A4 4 0 0 1 21 11"></svg:path><svg:path fill-rule="evenodd" d="M27 13a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2zm-3 7c1.035 0 1.875-.895 1.875-2s-.84-2-1.875-2s-1.875.895-1.875 2s.84 2 1.875 2" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14 6h20a2 2 0 0 1 2 2v5.4l-2.89-3.084l-1.46 1.368l4.35 4.64v2.075l-2.89-3.083l-1.46 1.368l4.35 4.64v2.075l-2.89-3.083l-1.46 1.368l4.35 4.64v2.075l-2.89-3.083l-1.46 1.368l4.35 4.64v2.075l-2.89-3.083l-1.46 1.368l4.35 4.64V40a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2v-3.669l4.357-4.647l-1.46-1.368L12 33.407v-2.076l4.357-4.647l-1.46-1.368L12 28.407v-2.076l4.357-4.647l-1.46-1.368L12 23.407v-2.076l4.357-4.647l-1.46-1.368L12 18.407v-2.076l4.357-4.647l-1.46-1.368L12 13.407V8a2 2 0 0 1 2-2m13 2h-6a4 4 0 0 0-4 4v23a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM10 8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsLetrinaNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsLetrinaNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
