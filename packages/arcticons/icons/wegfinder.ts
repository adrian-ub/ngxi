import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWegfinderIcon],svg[arcticons-wegfinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.653h7.444c.053 0 .1.03.124.077l7.733 15.425c.047.093.171.11.232.025c1.083-1.51 8.621-12.193 8.621-17.122c0-2.774-1.962-5.302-4.736-5.293c-2.765.01-4.705 2.527-4.705 5.293c0 4.468 8.156 15.576 9.307 17.121c.063.084.188.065.232-.03l7.163-15.416a.14.14 0 0 1 .127-.08H43.5"></svg:path><svg:circle cx="24.079" cy="18.24" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsWegfinderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
