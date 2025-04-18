import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols30fpsSharpIcon],svg[material-symbols-30fps-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19v-3h6v-2.5H2v-3h6V8H2V5h9v5.5L9.5 12l1.5 1.5V19zm13-3h4V8h-4zm-3 3V5h10v14z"></svg:path>`,
})
export class MaterialSymbols30fpsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
