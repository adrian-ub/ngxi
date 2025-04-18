import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsPinSharpIcon],svg[famicons-pin-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M339 99a83 83 0 1 0-102 80.8V464l19 32l19-32V179.8A83.28 83.28 0 0 0 339 99m-59-6a21 21 0 1 1 21-21a21 21 0 0 1-21 21"></svg:path>`,
})
export class FamiconsPinSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
