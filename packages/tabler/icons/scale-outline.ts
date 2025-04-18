import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerScaleOutlineIcon],svg[tabler-scale-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"></svg:path><svg:path d="M12 7c1.956 0 3.724.802 5 2.095l-2.956 2.904a3 3 0 0 0-2.038-.799a3 3 0 0 0-2.038.798L7.012 9.095a6.98 6.98 0 0 1 5-2.095z"></svg:path></svg:g>`,
})
export class TablerScaleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
