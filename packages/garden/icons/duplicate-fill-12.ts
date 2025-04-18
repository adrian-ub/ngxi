import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDuplicateFill12Icon],svg[garden-duplicate-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5H4c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1m-1.5 5h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5m0-2h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5M2 5c0-.55.45-1 1-1h5.5c.28 0 .5-.22.5-.5V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v5c0 .55.45 1 1 1h.5c.28 0 .5-.22.5-.5zm.5-3h4c.28 0 .5.22.5.5s-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5"></svg:path>`,
})
export class GardenDuplicateFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
