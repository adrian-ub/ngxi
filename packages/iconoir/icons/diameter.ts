import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDiameterIcon],svg[iconoir-diameter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m7-10l-3-3m3 3l-3 3m3-3H5m0 0l3-3m-3 3l3 3"></svg:path>`,
})
export class IconoirDiameterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
