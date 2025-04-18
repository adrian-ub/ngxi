import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPersonalBagOffSharpIcon],svg[material-symbols-personal-bag-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2q1.275 0 2.138.938T15 5.15v.55q1.775.825 2.888 2.5T19 12v4.15l-10-10V5q0-1.25.875-2.125T12 2m0 2q-.425 0-.712.288T11 5v.1q.275-.05.5-.075T12 5t.5.025t.5.075V5q0-.425-.288-.712T12 4m7.8 18.6L16.175 19H19v3H5V12q0-.9.213-1.737T5.85 8.7L1.4 4.2l1.4-1.4l18.4 18.4zM9.15 12H8v2h3.15z"></svg:path>`,
})
export class MaterialSymbolsPersonalBagOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
