import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineProductionBeltSolidIcon],svg[streamline-production-belt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.294 1.125h2.364c.374 0 .676.27.676.602v5.984H2.646l-.097.001V1.727c0-.333.302-.602.676-.602H5.59v3.014c0 .08.036.156.1.213a.36.36 0 0 0 .238.088h2.028a.36.36 0 0 0 .239-.088a.3.3 0 0 0 .099-.213zM2.646 8.96h8.708a2.448 2.448 0 0 1 0 4.895H2.646a2.448 2.448 0 1 1 0-4.895m1.761 2.44a.875.875 0 1 1-1.75 0a.875.875 0 0 1 1.75 0m3.473 0a.875.875 0 1 1-1.75 0a.875.875 0 0 1 1.75 0m2.597.874a.875.875 0 1 0 0-1.75a.875.875 0 0 0 0 1.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineProductionBeltSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
