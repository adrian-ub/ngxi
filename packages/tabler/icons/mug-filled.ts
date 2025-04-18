import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMugFilledIcon],svg[tabler-mug-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.903 4.008L4.086 4h10.828A2.08 2.08 0 0 1 17 6.077V7h1.5c1.917 0 3.5 1.477 3.5 3.333v2.334C22 14.523 20.417 16 18.5 16h-1.663a5.33 5.33 0 0 1-5.17 4H7.333C4.389 20 2 17.625 2 14.692V6.074a2.08 2.08 0 0 1 1.903-2.066M17 14h1.5c.843 0 1.5-.613 1.5-1.333v-2.334C20 9.613 19.343 9 18.5 9H17z"></svg:path>`,
})
export class TablerMugFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
