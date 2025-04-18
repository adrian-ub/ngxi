import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScoreboardSharpIcon],svg[material-symbols-light-scoreboard-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.385 14.692h3.884V9.308h-3.884zm.884-.884v-3.616h2.115v3.616zm-9.538.884h3.885v-.884h-3v-1.423h3V9.308H5.73v.884h3v1.424h-3zm5.827-3.826h.884V9.98h-.884zm0 3.269h.884v-.885h-.884zm-8.596 4.653V5.327H7.5v-2h1v2h7v-2h1v2h4.539v13.462zm8.596-11.192h.884V6.327h-.884zm0 10.192h.884V16.52h-.884z"></svg:path>`,
})
export class MaterialSymbolsLightScoreboardSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
