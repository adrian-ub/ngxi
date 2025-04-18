import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTriggerIcon],svg[material-icon-theme-trigger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4CAF50" fill-rule="evenodd" d="M11.158 13.51L16 5l12 21.09H4l4.842-8.51l3.425 2.007l-1.416 2.49h10.298L16 13.027l-1.417 2.49z" clip-rule="evenodd"></svg:path>`,
})
export class MaterialIconThemeTriggerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
