import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinAngleUpIcon],svg[vaadin-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12v-2l5-5l5 5v2L8 7z"></svg:path>`,
})
export class VaadinAngleUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
