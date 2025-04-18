import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBoneOffIcon],svg[tabler-bone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12.5 8.502l.38-.38A3 3 0 1 1 18 6a3 3 0 1 1-2.12 5.122l-.372.372M13.5 13.502l-2.378 2.378a3 3 0 1 1-5.117 2.297V18h-.176a3 3 0 1 1 2.298-5.115l2.378-2.378M3 3l18 18"></svg:path>`,
})
export class TablerBoneOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
