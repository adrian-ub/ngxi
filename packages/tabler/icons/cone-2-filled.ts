import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCone2FilledIcon],svg[tabler-cone-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c5.52 0 10 1.494 10 4.002v.5a1 1 0 0 1-.121.477L13.74 20.985a2 2 0 0 1-3.489-.016l-8.13-14.99A1 1 0 0 1 2 5.504v-.5C2 2.495 6.48 1 12 1"></svg:path>`,
})
export class TablerCone2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
