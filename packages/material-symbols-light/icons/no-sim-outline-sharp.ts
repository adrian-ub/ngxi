import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNoSimOutlineSharpIcon],svg[material-symbols-light-no-sim-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 16.425l-1-1V4h-7.15L8.696 6.154l-.719-.708L10.423 3H19zm1.423 5.683L6.577 8.262L6 8.839V20h12v-1.736l1 1V21H5V8.423l.87-.87l-3.824-3.822l.714-.708l18.37 18.371zm-8.138-8.171"></svg:path>`,
})
export class MaterialSymbolsLightNoSimOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
