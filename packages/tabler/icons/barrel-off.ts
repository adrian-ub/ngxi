import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBarrelOffIcon],svg[tabler-barrel-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 4h8.722a2 2 0 0 1 1.841 1.22Q20 8.61 20 12a16.4 16.4 0 0 1-.407 3.609m-.964 3.013l-.066.158A2 2 0 0 1 16.722 20H7.278a2 2 0 0 1-1.841-1.22Q4 15.39 4 12q0-3.315 1.374-6.63"></svg:path><svg:path d="M14 4q.877 3.506.985 7.01m-.114 3.86A33.4 33.4 0 0 1 14 20M10 4a34 34 0 0 0-.366 1.632m-.506 3.501A32 32 0 0 0 9 12q0 4 1 8m-5.5-4H16m3.5-8H12M8 8H4.5M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBarrelOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
