import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsBuildingIcon],svg[pepicons-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 18.5a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2H2Z"></svg:path><svg:path d="M6.5 17a1 1 0 1 1-2 0V4.308C4.5 2.51 5.809 1 7.5 1h5c1.691 0 3 1.51 3 3.308V17a1 1 0 1 1-2 0V4.308c0-.752-.482-1.308-1-1.308h-5c-.518 0-1 .556-1 1.308V17Z"></svg:path><svg:path d="M8 4h1a.5.5 0 0 1 .5.5v1A.5.5 0 0 1 9 6H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 4Zm3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 11 4Zm0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 11 7Zm0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm0 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5ZM8 7h1a.5.5 0 0 1 .5.5v1A.5.5 0 0 1 9 9H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 7Zm0 6h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 13Zm0-3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 10Z"></svg:path></svg:g>`,
})
export class PepiconsBuildingIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
