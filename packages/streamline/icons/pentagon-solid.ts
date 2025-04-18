import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePentagonSolidIcon],svg[streamline-pentagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.969.665a1.5 1.5 0 0 0-1.938 0L.727 5.153a1.5 1.5 0 0 0-.424 1.702l2.481 6.202A1.5 1.5 0 0 0 4.177 14h5.646a1.5 1.5 0 0 0 1.393-.943l2.48-6.202a1.5 1.5 0 0 0-.423-1.702z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePentagonSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
