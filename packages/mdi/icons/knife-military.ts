import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKnifeMilitaryIcon],svg[mdi-knife-military-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 2l-4.61 1.75l-6.93 6.93L14 14.22l6.92-6.93C22.43 5.78 22 2 22 2M8.33 10l-1.41 1.39l1.41 1.41l-5.65 5.66L6.21 22l5.66-5.66l1.41 1.42l1.42-1.42z"></svg:path>`,
})
export class MdiKnifeMilitaryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
