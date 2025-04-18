import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinMaleIcon],svg[vaadin-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a2 2 0 1 1-3.999.001A2 2 0 0 1 10 2"></svg:path><svg:path fill="currentColor" d="m12.79 7.32l-2.6-2.63A2.3 2.3 0 0 0 8.54 4H7.469c-.648 0-1.235.264-1.659.69l-2.6 2.63a.73.73 0 1 0 .998 1.003L6 6.53V16h1.5v-5h1v5H10V6.53l1.75 1.8a.73.73 0 1 0 1.041-1.009z"></svg:path>`,
})
export class VaadinMaleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
