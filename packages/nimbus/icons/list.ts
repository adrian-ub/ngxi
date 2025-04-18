import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusListIcon],svg[nimbus-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.8 3.05H16v1.26H3.8zm0 4.29H16V8.6H3.8zm0 4.36H16v1.26H3.8zM1.25 2.5A1.22 1.22 0 0 1 2.5 3.68a1.22 1.22 0 0 1-1.25 1.17A1.22 1.22 0 0 1 0 3.68A1.22 1.22 0 0 1 1.25 2.5m0 4.3a1.18 1.18 0 1 1 0 2.35a1.18 1.18 0 1 1 0-2.35m0 4.35a1.18 1.18 0 1 1 0 2.35a1.18 1.18 0 1 1 0-2.35"></svg:path>`,
})
export class NimbusListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
