import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFlowerIcon],svg[tabler-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path><svg:path d="M12 2a3 3 0 0 1 3 3q0 .843-.776 2.64L13.5 9l1.76-1.893q.748-.899 1.27-1.205a2.97 2.97 0 0 1 4.07 1.099a3.01 3.01 0 0 1-1.09 4.098q-.561.326-1.846.535L15 12l2.4.326c1 .145 1.698.337 2.11.576A3.01 3.01 0 0 1 20.6 17a2.97 2.97 0 0 1-4.07 1.098q-.522-.303-1.27-1.205L13.5 15l.724 1.36q.775 1.799.776 2.64a3 3 0 0 1-6 0q0-.843.776-2.64L10.5 15l-1.76 1.893q-.748.9-1.27 1.205A2.97 2.97 0 0 1 3.4 17a3.01 3.01 0 0 1 1.09-4.098q.561-.326 1.846-.536L9 12l-2.4-.325c-1-.145-1.698-.337-2.11-.576A3.01 3.01 0 0 1 3.4 7a2.97 2.97 0 0 1 4.07-1.099q.522.304 1.27 1.205L10.5 9Q9 5.562 9 5a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class TablerFlowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
