import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlayCircleFill12Icon],svg[garden-play-circle-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0a6 6 0 1 0 6 6a6.005 6.005 0 0 0-6-6m2.47 6.4L4.8 9.15a.5.5 0 0 1-.8-.4v-5.5a.5.5 0 0 1 .8-.4L8.47 5.6a.508.508 0 0 1 0 .8"></svg:path>`,
})
export class GardenPlayCircleFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
