import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAdOffIcon],svg[tabler-ad-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"></svg:path><svg:path d="M7 15v-4a2 2 0 0 1 2-2m2 2v4m-4-2h4m6-4v4m-.885-.869c.33.149.595.412.747.74M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerAdOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
