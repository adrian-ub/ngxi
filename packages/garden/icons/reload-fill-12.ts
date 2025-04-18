import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenReloadFill12Icon],svg[garden-reload-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10 4c-.8-1.1-2-2.5-4.1-2.5c-2.5 0-4.4 2-4.4 4.5s2 4.5 4.4 4.5c1.3 0 2.5-.6 3.3-1.5M11 1.5v3c0 .3-.2.5-.5.5h-3"></svg:path>`,
})
export class GardenReloadFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
