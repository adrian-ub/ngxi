import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilExternalLinkIcon],svg[cil-external-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 464H48V104h192V72H16v424h416V272h-32z"></svg:path><svg:path fill="currentColor" d="M304 16v32h137.373L188.687 300.687l22.626 22.626L464 70.627V208h32V16z"></svg:path>`,
})
export class CilExternalLinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
