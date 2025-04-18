import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBorgSharpIcon],svg[material-symbols-light-borg-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 20.783l-7.23-4.196V12.5h4.403v2.848H11.5zM4.27 11.5V7.414l7.23-4.197v5.435H8.673V11.5zm5.403 2.846V9.673h4.635v4.673zm2.827 6.437v-5.435h2.808V12.5h4.423v4.087zm2.808-9.283V8.652H12.5V3.217l7.23 4.197V11.5z"></svg:path>`,
})
export class MaterialSymbolsLightBorgSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
