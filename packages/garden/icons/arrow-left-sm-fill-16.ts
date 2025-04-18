import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowLeftSmFill16Icon],svg[garden-arrow-left-sm-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.21 8.97l3.181 2.935a.38.38 0 0 0 .387.07a.33.33 0 0 0 .222-.301V9h5.5a.5.5 0 0 0 0-1H7V5.332c0-.298-.387-.443-.609-.232L3.21 8.037a.63.63 0 0 0-.21.466c0 .175.075.342.21.466Z"></svg:path>`,
})
export class GardenArrowLeftSmFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
