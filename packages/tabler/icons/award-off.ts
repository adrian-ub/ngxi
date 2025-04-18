import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAwardOffIcon],svg[tabler-award-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16.72 12.704a6 6 0 0 0-8.433-8.418m-1.755 2.24a6 6 0 0 0 7.936 7.944"></svg:path><svg:path d="m12 15l3.4 5.89l1.598-3.233l.707.046m1.108-2.902l-1.617-2.8M6.802 12l-3.4 5.89L7 17.657l1.598 3.232l3.4-5.889M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerAwardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
