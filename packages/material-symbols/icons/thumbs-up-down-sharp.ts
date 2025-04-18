import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsThumbsUpDownSharpIcon],svg[material-symbols-thumbs-up-down-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 14V5.4L5.4 0l1.225 1.225L5.8 5H12v2.575L9.275 14zm18.6 10l-1.225-1.225L18.2 19H12v-2.575L14.725 10H24v8.6z"></svg:path>`,
})
export class MaterialSymbolsThumbsUpDownSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
