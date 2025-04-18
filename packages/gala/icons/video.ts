import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaVideoIcon],svg[gala-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="M 47.999992,48 H 160 c 17.728,0 32,14.272 32,32 v 96 c 0,17.728 -14.272,32 -32,32 H 47.999992 c -17.728,0 -32,-14.272 -32,-32 V 80 c 0,-17.728 14.272,-32 32,-32 z"></svg:path><svg:path d="m 192,160 48,32 V 64 l -48,32"></svg:path></svg:g>`,
})
export class GalaVideoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
