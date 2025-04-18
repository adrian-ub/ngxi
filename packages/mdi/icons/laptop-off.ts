import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLaptopOffIcon],svg[mdi-laptop-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.27L2.28 3L20 20.72L18.73 22l-2-2H0v-2h4a2 2 0 0 1-2-2V6c0-.22.04-.43.1-.63zM4 16h8.73L4 7.27zm16 0V6H7.82l-2-2H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-2.18l-4-4z"></svg:path>`,
})
export class MdiLaptopOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
