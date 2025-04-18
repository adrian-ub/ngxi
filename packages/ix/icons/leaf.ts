import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLeafIcon],svg[ix-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m427.582 54.248l30.17 30.17l-81.108 81.111c39.686 53.604 35.027 126.8-13.977 175.804q-64 64-298.667 106.667q42.666-234.667 106.667-298.667c49.004-49.004 122.2-53.663 175.804-13.977zm-74.667 90.667l-47.262 47.084H202.667v21.334h81.572l-64.242 64H160v21.333h38.583l-88.792 88.458l15.085 15.085l88.457-88.125V352h21.334l-.001-59.17l64-63.758v80.26H320V207.819L368 160z"></svg:path>`,
})
export class IxLeafIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
