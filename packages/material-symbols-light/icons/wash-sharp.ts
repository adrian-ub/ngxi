import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWashSharpIcon],svg[material-symbols-light-wash-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21H3v-9.563l9.26-6l.894.97l-2.277 3.785H19v1h-6v2.27h8v1h-8v2.269h7v1h-7V20h5zm-.233-12.98q-.78 0-1.389-.611q-.609-.61-.609-1.391q0-.7.46-1.58t1.54-2.15q1.081 1.27 1.54 2.15t.46 1.58q0 .78-.61 1.39q-.611.611-1.392.611"></svg:path>`,
})
export class MaterialSymbolsLightWashSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
