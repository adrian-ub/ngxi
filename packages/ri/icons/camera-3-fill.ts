import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCamera3FillIcon],svg[ri-camera-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20zm12 12a5 5 0 1 0 0-10a5 5 0 0 0 0 10M4 7v2h3V7zm0-5h6v2H4z"></svg:path>`,
})
export class RiCamera3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
