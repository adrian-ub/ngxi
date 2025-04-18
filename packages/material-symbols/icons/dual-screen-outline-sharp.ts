import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDualScreenOutlineSharpIcon],svg[material-symbols-dual-screen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 17.6l6 2.4V6.4L6 4zm-2 1.35V2h2l8 3.025V22.95zm8 .05v-2h6V4H6V2h14v17zm-6-1.4V4z"></svg:path>`,
})
export class MaterialSymbolsDualScreenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
