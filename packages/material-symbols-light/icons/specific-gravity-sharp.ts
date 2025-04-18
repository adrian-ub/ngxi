import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpecificGravitySharpIcon],svg[material-symbols-light-specific-gravity-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.104 21L4.116 3h15.769l-1.989 18zM5.733 8.5h3.829q.467-.475 1.093-.737Q11.281 7.5 12 7.5t1.345.263t1.094.737h3.828L18.75 4H5.225zm6.27 5q1.034 0 1.765-.735t.732-1.769t-.735-1.764t-1.769-.732t-1.764.736t-.732 1.768t.736 1.764t1.768.732"></svg:path>`,
})
export class MaterialSymbolsLightSpecificGravitySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
