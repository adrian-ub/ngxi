import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAtFill16Icon],svg[garden-at-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11 5v3h0a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3h0a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3h0v1a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V8h0a7 7 0 0 0-7-7h0a7 7 0 0 0-7 7h0a7 7 0 0 0 7 7h2.8"></svg:path>`,
})
export class GardenAtFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
