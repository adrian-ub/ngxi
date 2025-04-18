import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVolumeVibrateFillIcon],svg[ri-volume-vibrate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.39 3.161l1.413 1.414l-2.475 2.475l2.475 2.475L18.328 12l2.475 2.476l-2.475 2.475l2.475 2.475l-1.414 1.414l-3.889-3.89l2.475-2.474L15.5 12l2.475-2.475L15.5 7.05zm-6.503.577a.5.5 0 0 1 .113.317v15.89a.5.5 0 0 1-.817.387L6.89 15.999L3 16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .704.07"></svg:path>`,
})
export class RiVolumeVibrateFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
