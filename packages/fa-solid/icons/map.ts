import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidMapIcon],svg[fa-solid-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.01 32.01 0 0 0 0 117.66M192 416l192 64V96L192 32zM554.06 33.16L416 96v384l139.88-55.95A32 32 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86"></svg:path>`,
})
export class FaSolidMapIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
