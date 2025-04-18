import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStackedInboxSharpIcon],svg[material-symbols-light-stacked-inbox-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 17.116v-12h16v12zm8-3.424q.825 0 1.413-.587t.587-1.413h5V6.116h-14v5.576h5q0 .825.588 1.413t1.412.587m3.73 6.424H2.5V7.5h1v11.616h13.73z"></svg:path>`,
})
export class MaterialSymbolsLightStackedInboxSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
