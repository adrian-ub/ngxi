import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPanelsFill16Icon],svg[garden-panels-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h7V1c0-.6-.4-1-1-1H8zm0 1v11h6c.6 0 1-.4 1-1V5zm6 10.5V15zM7 11V0H2c-.6 0-1 .4-1 1v10zm0 1H1v3c0 .6.4 1 1 1h5z"></svg:path>`,
})
export class GardenPanelsFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
