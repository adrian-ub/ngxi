import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLightningBoltStroke12Icon],svg[garden-lightning-bolt-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8.76 5.5H6.85L9.3.86C9.38.66 9.29.5 9.1.5H5.39c-.2 0-.43.16-.51.36L3.04 5.14c-.09.2 0 .36.2.36H5L3.07 11c-.13.37-.03.68.43.27l5.28-5.23c.3-.29.29-.54-.02-.54z"></svg:path>`,
})
export class GardenLightningBoltStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
