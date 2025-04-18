import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCheckedBagSharpIcon],svg[material-symbols-light-checked-bag-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.192 16.385V7h1.423q0-.98.702-1.683q.702-.702 1.683-.702t1.683.702T14.385 7h1.423v9.385zM10.5 7h3q0-.65-.425-1.075T12 5.5t-1.075.425T10.5 7m6.192 9.385V7H19v9.385zM5 16.385V7h2.308v9.385zm-1.616 3v-1h17.232v1z"></svg:path>`,
})
export class MaterialSymbolsLightCheckedBagSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
