import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenExitStroke16Icon],svg[garden-exit-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.7 2.4l2-1.7c.3-.3.8 0 .8.4V15c0 .4-.5.7-.8.4l-2-1.7c-.1-.1-.2-.2-.2-.4V2.7c0-.1.1-.3.2-.3m2.8.1H9c.3 0 .5.2.5.5v2.5m-6 8H9c.3 0 .5-.2.5-.5v-2.5M15 8H7m5.5-3l2.6 2.6c.2.2.2.5 0 .7L12.5 11"></svg:path>`,
})
export class GardenExitStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
