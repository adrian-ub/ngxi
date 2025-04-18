import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinNurseIcon],svg[vaadin-nurse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.2 12a4.08 4.08 0 0 0-3.931-2.37L8 13.53l-3.28-3.9a4.16 4.16 0 0 0-3.909 2.345a9.1 9.1 0 0 0-.808 2.988L2 15v1h12v-1h2a9.2 9.2 0 0 0-.824-3.057z"></svg:path><svg:path fill="currentColor" d="M6.57 8.73a.82.82 0 0 1-.685.729L8 12l2.12-2.52a.82.82 0 0 1-.69-.727c0-.613.8-.413 1.43-1.453C10.86 7.27 13.74 0 8 0S5.14 7.27 5.14 7.27c.63 1.05 1.44.85 1.43 1.46"></svg:path>`,
})
export class VaadinNurseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
