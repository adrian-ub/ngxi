import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhNexusIcon],svg[whh-nexus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 1024H304q-144 0-224-31.5T0 896V128q0-65 80-96.5T304 0h160q145 0 224.5 31.5T768 128v768q0 65-80 96.5T464 1024m240-896H64v768h640zM128 832V191h384z"></svg:path>`,
})
export class WhhNexusIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
