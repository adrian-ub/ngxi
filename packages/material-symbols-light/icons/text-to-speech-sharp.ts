import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextToSpeechSharpIcon],svg[material-symbols-light-text-to-speech-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h8.323l-1 1H4v16h11v-2.5h1V21zm3.5-3.5v-1h6v1zm0-2.77v-1h4v1zm8-.75l-3.288-3.288H8.5v-4h2.712L14.5 3.404zm2-2.357V5.762q.766.505 1.133 1.319T18 8.692t-.377 1.612q-.377.813-1.123 1.319m0 3.935v-1.062q1.539-.74 2.52-2.336q.98-1.594.98-3.468t-.98-3.468t-2.52-2.335V1.827q1.946.771 3.223 2.668T21 8.692t-1.277 4.197t-3.223 2.669"></svg:path>`,
})
export class MaterialSymbolsLightTextToSpeechSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
