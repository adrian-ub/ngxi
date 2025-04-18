import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDetailsRoundedIcon],svg[material-symbols-light-details-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.066 20q-.46 0-.69-.401t-.012-.805l6.934-12.469q.218-.423.702-.423t.702.423l6.935 12.47q.217.403-.013.804t-.69.401zm.334-1h6.1V8.021zm7.1 0h6.1L12.5 8.021z"></svg:path>`,
})
export class MaterialSymbolsLightDetailsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
