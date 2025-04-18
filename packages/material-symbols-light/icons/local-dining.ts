import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalDiningIcon],svg[material-symbols-light-local-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.298 20.308l-.707-.708L13.725 9.465q-.508-1.203-.221-2.365q.287-1.161 1.29-2.154q.979-.979 2.45-1.358t2.458.608t.608 2.458t-1.358 2.45q-.992 1.004-2.154 1.29t-2.365-.221L12.606 12l7.6 7.6l-.708.708l-7.6-7.55zm3.066-8.435l-2.77-2.77Q3.475 7.986 3.388 6.457t.899-2.764L9.91 9.327z"></svg:path>`,
})
export class MaterialSymbolsLightLocalDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
