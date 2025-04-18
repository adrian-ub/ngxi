import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartTutorIcon],svg[arcticons-smart-tutor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.578 34.811c-.45 4.136-2.05 6.498-3.572 5.277s-2.393-5.564-1.944-9.702s2.046-6.505 3.57-5.289s2.395 5.555 1.948 9.695m29.631.466c-.37 3.4-1.516 5.6-2.757 5.599a1.3 1.3 0 0 1-.815-.322c-1.522-1.221-2.393-5.564-1.944-9.702s2.046-6.505 3.57-5.289s2.395 5.555 1.948 9.694"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.945 32.594c.183-6.495.113-16.125 2.127-19.792c5.845-10.649 25.404-10.123 30.525-.473c2.196 4.138 2.833 13.937 2.732 20.712M25.08 38.432l1.91 2.571l11.463-.146"></svg:path>`,
})
export class ArcticonsSmartTutorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
