import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAccumulationSnowIcon],svg[carbon-accumulation-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm2 12h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm4-12h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M28 4a2 2 0 0 0-2 2v20H6v-4h4v-2H6v-4h4v-2H6v-4h4V8H6V6a2 2 0 0 0-2-2H2v2h2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6h2V4Z"></svg:path>`,
})
export class CarbonAccumulationSnowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
