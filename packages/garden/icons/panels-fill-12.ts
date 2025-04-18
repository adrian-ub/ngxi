import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPanelsFill12Icon],svg[garden-panels-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0H2c-.6 0-1 .4-1 1v7h4zm1 3h5V1c0-.6-.4-1-1-1H6zm0 9h4c.6 0 1-.4 1-1V4H6zM5 9H1v2c0 .6.4 1 1 1h3z"></svg:path>`,
})
export class GardenPanelsFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
