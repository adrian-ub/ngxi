import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLightbulbIcon],svg[picon-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8c1-4-4-6 1-8c5 2 0 4 1 8M3 6v1h2V6"></svg:path>`,
})
export class PiconLightbulbIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
