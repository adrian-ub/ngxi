import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsInLightIcon],svg[ph-arrows-in-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M146 104V64a6 6 0 0 1 12 0v25.51l45.76-45.75a6 6 0 0 1 8.48 8.48L166.48 98H192a6 6 0 0 1 0 12h-40a6 6 0 0 1-6-6m-42 42H64a6 6 0 0 0 0 12h25.52l-45.76 45.76a6 6 0 1 0 8.48 8.48L98 166.48V192a6 6 0 0 0 12 0v-40a6 6 0 0 0-6-6m62.48 12H192a6 6 0 0 0 0-12h-40a6 6 0 0 0-6 6v40a6 6 0 0 0 12 0v-25.52l45.76 45.76a6 6 0 0 0 8.48-8.48ZM104 58a6 6 0 0 0-6 6v25.51L52.24 43.76a6 6 0 0 0-8.48 8.48L89.52 98H64a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhArrowsInLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
