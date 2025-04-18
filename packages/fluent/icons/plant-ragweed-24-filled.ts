import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlantRagweed24FilledIcon],svg[fluent-plant-ragweed-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a3 3 0 0 0-2.951 3.54a2.5 2.5 0 0 0-1.334 4.21A2.5 2.5 0 0 0 9.5 14h1.75v4.69l-3.47-3.47a.75.75 0 0 0-1.06 1.06l4.53 4.53v1.44a.75.75 0 0 0 1.5 0v-1.44l4.53-4.53a.75.75 0 1 0-1.06-1.06l-3.47 3.47V14h1.75a2.5 2.5 0 0 0 1.785-4.25a2.5 2.5 0 0 0-1.334-4.21Q15 5.278 15 5a3 3 0 0 0-3-3"></svg:path>`,
})
export class FluentPlantRagweed24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
