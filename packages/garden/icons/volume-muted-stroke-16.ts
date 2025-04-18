import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenVolumeMutedStroke16Icon],svg[garden-volume-muted-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m4.5 10.5l4.1 4.1c.4.4.9.1.9-.3V1.7c0-.4-.5-.7-.9-.3L4.5 5.5H1c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5zm7-.5l4-4m-4 0l4 4"></svg:path>`,
})
export class GardenVolumeMutedStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
