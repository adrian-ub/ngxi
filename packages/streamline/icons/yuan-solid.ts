import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineYuanSolidIcon],svg[streamline-yuan-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.8.4a1 1 0 1 0-1.6 1.2l3.917 5.222v.021H3.915a1 1 0 1 0 0 2h2.202v1.245H3.915a1 1 0 1 0 0 2h2.202v.805a1 1 0 1 0 2 0v-.805h2.202a1 1 0 1 0 0-2H8.117V8.843h2.202a1 1 0 1 0 0-2H8.117v-.02L12.033 1.6a1 1 0 1 0-1.6-1.2L7.117 4.822z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineYuanSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
