import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faRegularPlayCircleIcon],svg[fa-regular-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248s248-111 248-248m-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256"></svg:path>`,
})
export class FaRegularPlayCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
