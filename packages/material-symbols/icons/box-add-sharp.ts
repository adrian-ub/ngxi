import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBoxAddSharpIcon],svg[material-symbols-box-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V5.8L5.3 3h13.4L21 5.8v5.625q-.475-.175-.975-.288T19 11.026q-.825 0-1.587.188T16 11.8V8H8v8l4-2l1.45.725q-.2.525-.325 1.088T13 16.975q0 1.125.4 2.163T14.55 21zm15 0v-3h-3v-2h3v-3h2v3h3v2h-3v3zM5.4 6h13.2l-.85-1H6.25z"></svg:path>`,
})
export class MaterialSymbolsBoxAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
