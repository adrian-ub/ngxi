import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenVolumeMutedFill12Icon],svg[garden-volume-muted-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="m8.5 7.5l3-3m-3 0l3 3"></svg:path><svg:path fill="currentColor" d="M6 10.77c-.26 0-.52-.11-.72-.3L2.79 8H1c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h1.79l2.49-2.47a1 1 0 0 1 1.1-.22c.37.15.62.51.62.92v7.53a1.016 1.016 0 0 1-1 1.01"></svg:path>`,
})
export class GardenVolumeMutedFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
