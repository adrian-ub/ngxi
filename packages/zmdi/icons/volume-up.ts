import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiVolumeUpIcon],svg[zmdi-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h85L192 21v342L85 256H0zm288 64q0 28-14.5 51T235 278V106q24 12 38.5 35t14.5 51M235 5q64 15 106.5 67T384 192t-42.5 120T235 379v-44q46-14 76-53.5t30-89.5t-30-89.5T235 49z"></svg:path>`,
})
export class ZmdiVolumeUpIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
