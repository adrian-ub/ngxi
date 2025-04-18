import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightThumbUpSharpIcon],svg[material-symbols-light-thumb-up-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.654 20V9l6.269-6.192l.87.869L13.665 9H22v3.17L18.696 20zM3 20V9h3.654v11z"></svg:path>`,
})
export class MaterialSymbolsLightThumbUpSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
