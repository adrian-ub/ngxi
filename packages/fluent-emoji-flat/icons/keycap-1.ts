import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatKeycap1Icon],svg[fluent-emoji-flat-keycap-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M17.574 7.875c.665.266 1.1.91 1.1 1.625v13a1.75 1.75 0 1 1-3.5 0v-8.625l-.157.165a1.75 1.75 0 1 1-2.534-2.413l3.174-3.334a1.75 1.75 0 0 1 1.917-.418"></svg:path></svg:g>`,
})
export class FluentEmojiFlatKeycap1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
