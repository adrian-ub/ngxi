import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightResetImageSharpIcon],svg[material-symbols-light-reset-image-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9.77V5h1v3.235q1-1.896 2.851-3.066T12 4q2.739 0 4.849 1.627t2.824 4.142h-1.06q-.696-2.108-2.486-3.438T12 5Q9.979 5 8.36 6.044T5.909 8.77H8.77v1zm3.5 7.73h9.154l-2.827-3.77l-2.615 3.308l-1.75-2.115zM4 21v-8.384h1V20h14v-7.384h1V21z"></svg:path>`,
})
export class MaterialSymbolsLightResetImageSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
