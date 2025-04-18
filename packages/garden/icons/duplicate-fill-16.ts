import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDuplicateFill16Icon],svg[garden-duplicate-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6c0-.55.45-1 1-1h9.5c.28 0 .5-.22.5-.5V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v8c0 .55.45 1 1 1h.5c.28 0 .5-.22.5-.5zm1.5-3h6c.28 0 .5.22.5.5s-.22.5-.5.5h-6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5M15 6H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1m-2.5 7h-6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5m0-3h-6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5"></svg:path>`,
})
export class GardenDuplicateFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
