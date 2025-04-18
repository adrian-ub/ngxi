import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsClusterVrIcon],svg[arcticons-cluster-vr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.202 32.574a12.126 12.126 0 1 1 0-17.148l-4.287 4.287a6.063 6.063 0 1 0 0 8.575z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.63 21.427L25.201 24l-2.573 2.572l4.287 4.287l2.573-2.572l1.072 1.072a7.579 7.579 0 1 0 0-10.718l-1.072 1.072l-2.572-2.573z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.992 22.927a1.516 1.516 0 0 1-2.143 2.144l-1.072-1.072l1.072-1.072a1.516 1.516 0 0 1 2.143 0"></svg:path>`,
})
export class ArcticonsClusterVrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
