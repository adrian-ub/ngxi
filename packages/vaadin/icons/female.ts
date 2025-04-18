import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFemaleIcon],svg[vaadin-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a2 2 0 1 1-3.999.001A2 2 0 0 1 10 2"></svg:path><svg:path fill="currentColor" d="M10 8V6.5l1.8 1.8c.3.3.7.3 1 0s.3-.8 0-1l-2.6-2.6c-.4-.5-1-.7-1.7-.7h-1c-.7 0-1.3.2-1.7.7L3.2 7.3c-.3.3-.3.8 0 1c.3.3.7.3 1 0L6 6.5V8l-4 5h4v3h4v-3h4z"></svg:path>`,
})
export class VaadinFemaleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
