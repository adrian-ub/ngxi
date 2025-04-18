import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarkdownPasteSharpIcon],svg[material-symbols-light-markdown-paste-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.846 20v-7.5H21V20h-1v-6.5h-2.577V18h-1v-4.5h-2.577V20zM4 20V4h6.252q.14-.586.623-.985q.483-.4 1.125-.4q.654 0 1.134.4q.48.398.62.985H20v6.116h-1V5h-3v2.23H8V5H5v14h5.462v1zm8.003-14.77q.345 0 .575-.232q.23-.233.23-.578t-.234-.575t-.577-.23t-.575.234t-.23.578t.233.574t.578.23"></svg:path>`,
})
export class MaterialSymbolsLightMarkdownPasteSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
