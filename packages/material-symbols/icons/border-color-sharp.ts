import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBorderColorSharpIcon],svg[material-symbols-border-color-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 24v-4h20v4zm2-6v-4.25l12.625-12.6l4.2 4.275L8.25 18zM16.6 6.8L18 5.4L16.6 4l-1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsBorderColorSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
