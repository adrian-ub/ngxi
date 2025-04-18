import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesModuleThreeOutlineIcon],svg[bubbles-module-three-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M.75 15v5.25l5.25 3l3.75-2.143M6 23.25V18m12-6l-5.25 3L18 18l5.25-3z"></svg:path><svg:path d="M12.75 15v5.25l5.25 3l5.25-3V15M18 18v5.25M12 .75l-5.25 3l5.25 3l5.25-3z"></svg:path><svg:path d="M6.75 3.75V9L12 12l5.25-3V3.75m-5.25 3V12m-2.25 2.143L6 12L.75 15L6 18l3-1.714"></svg:path></svg:g>`,
})
export class BubblesModuleThreeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
