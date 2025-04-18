import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLightningBoltStroke16Icon],svg[garden-lightning-bolt-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.17 7.5H9.5L12.96 1c.12-.28-.01-.5-.29-.5H7.5c-.28 0-.6.22-.71.5L4.21 7c-.11.28.01.5.29.5h2.45l-2.64 7.24c-.19.51-.04.95.59.38l7.29-6.87c.43-.4.4-.75-.02-.75z"></svg:path>`,
})
export class GardenLightningBoltStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
