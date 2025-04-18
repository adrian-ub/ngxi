import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laStopwatchIcon],svg[la-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4v2h6V4zm3 3C9.937 7 5 11.938 5 18s4.938 11 11 11s11-4.938 11-11c0-2.918-1.137-5.59-3-7.563l1.719-1.718L24.28 7.28l-1.81 1.814A10.97 10.97 0 0 0 16 7m0 2c4.98 0 9 4.02 9 9s-4.02 9-9 9s-9-4.02-9-9s4.02-9 9-9m-1 2v5.281c-.598.348-1 .98-1 1.719c0 .738.402 1.371 1 1.719V21h2v-1.281c.598-.348 1-.98 1-1.719c0-.738-.402-1.371-1-1.719V11z"></svg:path>`,
})
export class LaStopwatchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
