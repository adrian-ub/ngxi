import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenPackageIcon],svg[oui-token-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.049 3.785l3.852 1.006l-4.049 1.103L4 4.791l3.951-1.006a.2.2 0 0 1 .098 0m.073 2.654l4.545-1.306v5.45l-.131.184l-4.414 1.455zm-4.789 4.145V5.188L7.498 6.41v5.81l-4.034-1.453z"></svg:path>`,
})
export class OuiTokenPackageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
