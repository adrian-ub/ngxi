import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsMintbitIcon],svg[fa6-brands-mintbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M73.2 512v-73.1h292.5v-73.2h73.2V219.4H512V0H292.6v73.1H146.3v73.2H73.2v292.6H0V512zm73.1-219.4h73.2v73.1h-73.2zm73.2-73.1h73.1v73.1h-73.2v-73.2zm73.1 0v-73.2h73.2v73.1h-73.2zm73.1-146.4h73.2v73.2h-73.2z"></svg:path>`,
})
export class Fa6BrandsMintbitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
