import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPublishSharpIcon],svg[material-symbols-light-publish-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 19v-8.65l-2.33 2.33l-.708-.718L12 8.423l3.539 3.539l-.708.719L12.5 10.35V19zM5 9.039V5h14v4.039h-1V6H6v3.039z"></svg:path>`,
})
export class MaterialSymbolsLightPublishSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
