import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEjectSolidIcon],svg[streamline-eject-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.9 1.503a1.5 1.5 0 0 1 2.2 0l4.96 5.343c.892.96.211 2.52-1.099 2.52H2.04c-1.31 0-1.99-1.56-1.1-2.52l4.962-5.343ZM.5 11.976a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2h-11a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineEjectSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
