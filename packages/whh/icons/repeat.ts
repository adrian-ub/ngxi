import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRepeatIcon],svg[whh-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1023 342q-1 15-9.5 29T992 385H662q-24 1-23-34l126-126q-109-96-253-96q-104 0-192.5 51.5t-140 140t-51.5 193T179.5 706t140 139.5T512 897q88 0 165.5-37.5T809 756l101 79q-72 89-176 139.5T512 1025q-104 0-199-40.5t-163.5-109T40.5 712T0 513t40.5-198.5t109-163T313 42.5T512 2q97 0 185.5 35T856 135L990 1q35-1 34 23z"></svg:path>`,
})
export class WhhRepeatIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
