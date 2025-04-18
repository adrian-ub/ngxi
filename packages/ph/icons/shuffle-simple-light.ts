import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phShuffleSimpleLightIcon],svg[ph-shuffle-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 48v40a6 6 0 0 1-12 0V62.48l-47.13 47.14a6 6 0 0 1-8.49-8.49L193.52 54H168a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m-6 114a6 6 0 0 0-6 6v25.52L52.24 43.76a6 6 0 0 0-8.48 8.48L193.52 202H168a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6m-106.87-15.62l-57.37 57.38a6 6 0 1 0 8.48 8.48l57.38-57.37a6 6 0 0 0-8.49-8.49"></svg:path>`,
})
export class PhShuffleSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
