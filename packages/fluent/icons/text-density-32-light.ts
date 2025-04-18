import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDensity32LightIcon],svg[fluent-text-density-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2.5a.5.5 0 0 0-1 0v27a.5.5 0 0 0 1 0zM18.5 8H26a2 2 0 1 1 0 4h-7.5v1H26a3 3 0 1 0 0-6h-7.5zM26 19h-7.5v-1H26a3 3 0 1 1 0 6h-7.5v-1H26a2 2 0 1 0 0-4M3.5 5a.5.5 0 0 0 0 1h11V5zM3 25.5a.5.5 0 0 1 .5-.5h11v1h-11a.5.5 0 0 1-.5-.5m.5-5.5a.5.5 0 0 0 0 1h11v-1zM3 15.5a.5.5 0 0 1 .5-.5h11v1h-11a.5.5 0 0 1-.5-.5m.5-5.5a.5.5 0 0 0 0 1h11v-1z"></svg:path>`,
})
export class FluentTextDensity32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
