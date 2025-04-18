import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMinimizeStroke16Icon],svg[garden-minimize-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M.5 4.5H4c.3 0 .5-.2.5-.5V.5m-4 11H4c.3 0 .5.2.5.5v3.5m11-11H12c-.3 0-.5-.2-.5-.5V.5m4 11H12c-.3 0-.5.2-.5.5v3.5M.5.5L4 4M15.5.5L12 4M.5 15.5L4 12m11.5 3.5L12 12"></svg:path>`,
})
export class GardenMinimizeStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
