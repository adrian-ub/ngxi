import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGooglenearbyIcon],svg[simple-icons-googlenearby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.546 12L12 6.545L17.455 12l-5.454 5.454zm16.976-1.154L13.158.48a1.635 1.635 0 0 0-2.314 0L.478 10.846a1.63 1.63 0 0 0 0 2.305l10.37 10.372a1.63 1.63 0 0 0 2.304 0l10.37-10.372a1.63 1.63 0 0 0 0-2.305M12 20.726l-8.727-8.728L12 3.27l8.727 8.728z"></svg:path>`,
})
export class SimpleIconsGooglenearbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
