import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsMergeLightIcon],svg[ph-arrows-merge-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190 40v64a6 6 0 0 1-1.76 4.24L134 162.49v55l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L122 217.51v-55l-54.24-54.27A6 6 0 0 1 66 104V40a6 6 0 0 1 12 0v61.51l50 50l50-50V40a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhArrowsMergeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
