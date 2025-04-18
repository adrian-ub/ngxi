import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMentzaIcon],svg[arcticons-mentza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.816 8.55c5.819 3.149 9.773 9.282 9.773 16.36c0 10.278-8.325 18.59-18.59 18.59S5.412 35.188 5.412 24.91c0-7.078 3.954-13.211 9.773-16.36M24 4.5v13.165M29.668 4.5v16.944M18.332 4.5v16.944"></svg:path>`,
})
export class ArcticonsMentzaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
