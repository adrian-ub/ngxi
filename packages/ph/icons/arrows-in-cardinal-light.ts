import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsInCardinalLightIcon],svg[ph-arrows-in-cardinal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M91.76 68.24a6 6 0 0 1 8.48-8.48L122 81.51V24a6 6 0 0 1 12 0v57.51l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0Zm40.48 87.52a6 6 0 0 0-8.48 0l-32 32a6 6 0 0 0 8.48 8.48L122 174.49V232a6 6 0 0 0 12 0v-57.51l21.76 21.75a6 6 0 0 0 8.48-8.48ZM232 122h-57.51l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48l32 32a6 6 0 0 0 8.48-8.48L174.49 134H232a6 6 0 0 0 0-12m-131.76 1.76l-32-32a6 6 0 0 0-8.48 8.48L81.51 122H24a6 6 0 0 0 0 12h57.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48"></svg:path>`,
})
export class PhArrowsInCardinalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
