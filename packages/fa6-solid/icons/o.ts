import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidOIcon],svg[fa6-solid-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96a160 160 0 1 0 0 320a160 160 0 1 0 0-320m224 160a224 224 0 1 1-448 0a224 224 0 1 1 448 0"></svg:path>`,
})
export class Fa6SolidOIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
