import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsThumbsUpDownOutlineSharpIcon],svg[material-symbols-thumbs-up-down-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 14V5.4L5.4 0l1.225 1.225L5.8 5H12v2.575L9.275 14zm2-2h5.95L10 7.15V7H3.35l.6-2.7L2 6.2zm16.6 12l-1.225-1.225L18.2 19H12v-2.575L14.725 10H24v8.6zm1.45-4.3L22 17.8V12h-5.95L14 16.85V17h6.65zM2 12V6.2zm20 5.8V12z"></svg:path>`,
})
export class MaterialSymbolsThumbsUpDownOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
