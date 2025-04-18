import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCubeUnfoldedIcon],svg[tabler-cube-unfolded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 15h10v5h5v-5h5v-5H12V5H7v5H2z"></svg:path><svg:path d="M7 15v-5h5v5h5v-5"></svg:path></svg:g>`,
})
export class TablerCubeUnfoldedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
