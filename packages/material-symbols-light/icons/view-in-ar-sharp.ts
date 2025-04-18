import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewInArSharpIcon],svg[material-symbols-light-view-in-ar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 19.608l-6.5-3.775V8.302L12 4.527l6.5 3.775v7.53zM3 7V3h4v1H4v3zm4 14H3v-4h1v3h3zm10 0v-1h3v-3h1v4zm3-14V4h-3V3h4v4zM7.012 8.583l-.512.292v.606l5 2.844v5.83l.5.287l.5-.286v-5.831l5-2.844v-.606l-.512-.292L12 11.466z"></svg:path>`,
})
export class MaterialSymbolsLightViewInArSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
