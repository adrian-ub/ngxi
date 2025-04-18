import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHourglassSimpleMediumBoldIcon],svg[ph-hourglass-simple-medium-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 193.68L145.35 128L214 62.32l.18-.18A20 20 0 0 0 200 28H56a20 20 0 0 0-14.13 34.14l.18.18l68.6 65.68l-68.6 65.68l-.18.18A20 20 0 0 0 56 228h144a20 20 0 0 0 14.14-34.14ZM107.75 92h40.5L128 111.39ZM190 52l-16.69 16H82.69L66 52ZM66 204l50-47.9V168a12 12 0 0 0 24 0v-11.9l50 47.9Z"></svg:path>`,
})
export class PhHourglassSimpleMediumBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
