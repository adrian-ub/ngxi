import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAdOffSharpIcon],svg[material-symbols-ad-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.775 22.6l-1.6-1.6H3V5.825L1.4 4.2l1.4-1.4l18.4 18.4zM5 19h11.175L5 7.825zm16-.825l-2-2V8h-8.175l-5-5H21z"></svg:path>`,
})
export class MaterialSymbolsAdOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
