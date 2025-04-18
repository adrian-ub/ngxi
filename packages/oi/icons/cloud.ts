import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCloudIcon],svg[oi-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 1C3.29 1 2.23 1.86 2 3C.9 3 0 3.9 0 5s.9 2 2 2h4.5C7.33 7 8 6.33 8 5.5c0-.65-.42-1.29-1-1.5v-.5A2.5 2.5 0 0 0 4.5 1"></svg:path>`,
})
export class OiCloudIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
