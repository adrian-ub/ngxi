import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBarrelIcon],svg[tabler-barrel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7.278 4h9.444a2 2 0 0 1 1.841 1.22Q20 8.61 20 12t-1.437 6.78A2 2 0 0 1 16.722 20H7.278a2 2 0 0 1-1.841-1.22Q4 15.39 4 12t1.437-6.78A2 2 0 0 1 7.278 4"></svg:path><svg:path d="M14 4q1 4 1 8c0 4-.333 5.333-1 8M10 4q-1 4-1 8c0 4 .333 5.333 1 8m-5.5-4h15m0-8h-15"></svg:path></svg:g>`,
})
export class TablerBarrelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
