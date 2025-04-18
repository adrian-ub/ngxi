import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenInboxFill16Icon],svg[garden-inbox-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10v2h6v-2h4V1c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v9zm-.5-7h7c.28 0 .5.22.5.5s-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5m0 2h7c.28 0 .5.22.5.5s-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5m0 2h7c.28 0 .5.22.5.5s-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5m7.5 4v1c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-1H1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-4z"></svg:path>`,
})
export class GardenInboxFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
