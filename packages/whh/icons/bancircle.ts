import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBancircleIcon],svg[whh-bancircle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1025q-104 0-199-40.5t-163.5-109T40.5 712T0 513t40.5-199t109-163.5T313 41T512 0t199 41t163.5 109.5t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M128 513q0 104 51.5 192.5t140 140T512 897q122 0 222-71L199 291q-71 100-71 222m384-384q-121 0-221 70l535 535q70-100 70-221q0-105-51.5-193.5T704.5 180T512 129"></svg:path>`,
})
export class WhhBancircleIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
