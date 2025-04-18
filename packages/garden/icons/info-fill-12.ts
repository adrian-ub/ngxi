import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenInfoFill12Icon],svg[garden-info-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 12C2.46 12 0 9.54 0 6.5S2.46 1 5.5 1S11 3.46 11 6.5S8.54 12 5.5 12M5 9.5c0 .28.22.5.5.5s.5-.22.5-.5v-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5zM5.5 3c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class GardenInfoFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
