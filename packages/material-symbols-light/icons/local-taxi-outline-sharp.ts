import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalTaxiOutlineSharpIcon],svg[material-symbols-light-local-taxi-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.23 18v2H4v-7.846L6.162 6h3.761V4.462h4.23V6h3.686L20 12.154V20h-1.23v-2zm.186-6.846h13.169L17.112 7H6.889zm-.416 1V17zm2.428 3.538q.466 0 .788-.326q.323-.327.323-.794q0-.466-.327-.788q-.327-.323-.793-.323q-.467 0-.79.327q-.321.327-.321.793q0 .467.326.79q.327.321.793.321m9.155 0q.466 0 .788-.326q.322-.327.322-.794q0-.466-.326-.788q-.327-.323-.793-.323q-.467 0-.79.327q-.321.327-.321.793q0 .467.326.79q.327.321.794.321M5 17h14v-4.846H5z"></svg:path>`,
})
export class MaterialSymbolsLightLocalTaxiOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
