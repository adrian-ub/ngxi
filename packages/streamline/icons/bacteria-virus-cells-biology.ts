import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBacteriaVirusCellsBiologyIcon],svg[streamline-bacteria-virus-cells-biology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.874 11.57c-4.079-2.981-.453-8.944 1.36-9.796c1.45-.681 2.719 0 3.172.426c1.713 1.609-.16 3.36.747 4.638c2.788 3.29-1.338 7.612-5.279 4.732"></svg:path><svg:path d="M6.282 9.257a1.229 1.229 0 1 0 2.458 0a1.229 1.229 0 1 0-2.458 0m.002-4.75a1.005 1.005 0 1 0 2.01 0a1.005 1.005 0 1 0-2.01 0M5.152 7.235a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M7.53 1.486V.542M5.945 1.944l-.528-.782m-.626 1.943l-.8-.5m-.184 2.103l-.853-.404m.239 2.136l-.926-.182m.747 1.854l-.943.027m1.312 1.636l-.868.369m1.829.988l-.657.677m2.133.316l-.434.838m2.144.495v-.944m1.797.588l-.408-.851m1.958-.239l-.665-.67m1.718-1.35l-.923-.2m.75-2.042l-.881.34m-.043-1.995l-.88.34m1.113-2.029l-.938-.107m.665-1.813l-.874.356M9.41 1.045l-.531.78"></svg:path></svg:g>`,
})
export class StreamlineBacteriaVirusCellsBiologyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
