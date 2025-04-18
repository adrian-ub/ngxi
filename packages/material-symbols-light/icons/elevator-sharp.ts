import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightElevatorSharpIcon],svg[material-symbols-light-elevator-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.885 17.5h2v-3.808h1V9.616h-4v4.076h1zm1.002-8.808q.446 0 .75-.307t.305-.753t-.307-.75t-.753-.305t-.75.308t-.305.752t.308.75t.752.305m4.825 1.808h3.192l-1.596-2.558zm1.596 5.558l1.596-2.558h-3.192zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightElevatorSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
