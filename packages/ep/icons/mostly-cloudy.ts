import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epMostlyCloudyIcon],svg[ep-mostly-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M737.216 357.952L704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04l-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.81 207.81 0 0 0 207.808-208a208.32 208.32 0 0 0-158.592-202.048m15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.81 271.81 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536a256.128 256.128 0 0 1 489.92-30.72"></svg:path>`,
})
export class EpMostlyCloudyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
