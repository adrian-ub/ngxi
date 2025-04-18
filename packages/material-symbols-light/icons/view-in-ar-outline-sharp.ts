import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewInArOutlineSharpIcon],svg[material-symbols-light-view-in-ar-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 19.589l-6.5-3.756v-7.55L12 4.527l6.5 3.756v7.55zm-.5-1.433v-5.831l-5-2.844v5.76zm1 0l5-2.915V9.48l-5 2.844zM3 7V3h4v1H4v3zm4 14H3v-4h1v3h3zm10 0v-1h3v-3h1v4zm3-14V4h-3V3h4v4zm-8 4.466l4.989-2.883L12 5.712l-4.988 2.87zm-.5.859"></svg:path>`,
})
export class MaterialSymbolsLightViewInArOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
