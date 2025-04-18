import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibFramerIcon],svg[cib-framer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.333 0h21.333v10.667H15.999zm0 10.667H16l10.667 10.667H5.334zm0 10.666H16V32z"></svg:path>`,
})
export class CibFramerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
