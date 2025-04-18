import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLightbulbStroke12Icon],svg[garden-lightbulb-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M3.5 7.965a4 4 0 1 1 4 0V9.5h-4z"></svg:path><svg:path stroke-linejoin="round" d="M4.5 5.5h2zm1 0v2z"></svg:path></svg:g><svg:path fill="currentColor" d="M3 11h5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1"></svg:path>`,
})
export class GardenLightbulbStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
