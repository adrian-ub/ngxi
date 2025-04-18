import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightContentPasteOffSharpIcon],svg[material-symbols-light-content-paste-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 17.189l-1-1V5h-3v2.23h-5.958L6.812 4h3.44q.14-.586.623-.985q.483-.4 1.125-.4q.654 0 1.134.4q.48.398.62.985H20zM12.003 5.23q.345 0 .575-.233t.23-.578t-.233-.575t-.578-.23t-.575.234t-.23.578t.234.574t.577.23M17.573 19L5 6.427V19zM4 20V5.427l-1.26-1.26l.714-.713l17.092 17.092l-.713.714l-1.26-1.26z"></svg:path>`,
})
export class MaterialSymbolsLightContentPasteOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
