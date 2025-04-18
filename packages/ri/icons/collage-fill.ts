import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCollageFillIcon],svg[ri-collage-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.189 13.264l1.383 7.842H4a1 1 0 0 1-1-1V14.71zM20 3.107a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1l-5.398-.001l-3.174-18zM9.398 3.106l1.444 8.188L3 12.679V4.107a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiCollageFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
