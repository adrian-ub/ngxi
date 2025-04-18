import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCompressPointIcon],svg[uil-compress-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.71 20.29L15.41 14H17a1 1 0 0 0 0-2h-3.59l5.66-5.66a1 1 0 1 0-1.41-1.41L12 10.59V7a1 1 0 0 0-2 0v1.59l-6.29-6.3a1 1 0 0 0-1.42 1.42L8.59 10H7a1 1 0 0 0 0 2h3.59l-5.66 5.66a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0L12 13.41V17a1 1 0 0 0 2 0v-1.59l6.29 6.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class UilCompressPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
