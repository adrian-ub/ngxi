import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEscapadaruralIcon],svg[arcticons-escapadarural-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.936 3.315v41.37m10.128-41.37v41.37m0-7.569c0-9.087 6.939-16.671 15.99-17.476M18.936 37.116c0-12.911 8.929-24.107 21.517-26.979"></svg:path>`,
})
export class ArcticonsEscapadaruralIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
