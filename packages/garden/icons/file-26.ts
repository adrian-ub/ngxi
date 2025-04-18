import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFile26Icon],svg[garden-file-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.41 0H2a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.58zM15 7a2 2 0 0 1-2-2V1l6 6z"></svg:path>`,
})
export class GardenFile26Icon {
  readonly viewBox = input("0 0 20 26")
  readonly width = input("0.77em")
  readonly height = input("1em")
}
