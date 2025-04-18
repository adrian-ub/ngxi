import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPhoneFill16Icon],svg[garden-phone-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 10.586l1.293-1.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-1.232 1.232a3.5 3.5 0 0 1-4.95 0L1.061 6.475a3.5 3.5 0 0 1 0-4.95L2.293.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414L5.414 6z"></svg:path>`,
})
export class GardenPhoneFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
