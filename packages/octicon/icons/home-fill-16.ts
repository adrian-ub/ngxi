import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconHomeFill16Icon],svg[octicon-home-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.906.384a1.75 1.75 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019a1.75 1.75 0 0 1-1.75 1.75h-2.5a.75.75 0 0 1-.75-.75V8.72H6v5.25a.75.75 0 0 1-.75.75h-2.5A1.75 1.75 0 0 1 1 12.97V5.95c0-.531.242-1.034.657-1.366z"></svg:path>`,
})
export class OcticonHomeFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
