import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayNextIcon],svg[subway-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 381.4l237.7-118.9L0 143.6zm237.7-118.9v118.9l237.7-118.9l-237.7-118.9zm237.7-118.9v237.8H512V143.6z"></svg:path>`,
})
export class SubwayNextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
