import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWifi1BarSharpIcon],svg[material-symbols-light-wifi-1-bar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21l-2.448-2.454q.486-.486 1.119-.747q.633-.26 1.327-.26t1.329.26t1.121.747z"></svg:path>`,
})
export class MaterialSymbolsLightWifi1BarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
