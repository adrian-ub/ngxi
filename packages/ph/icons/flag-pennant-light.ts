import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlagPennantLightIcon],svg[ph-flag-pennant-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242 98.33l-184-64A6 6 0 0 0 50 40v176a6 6 0 0 0 12 0v-43.73l180-62.6a6 6 0 0 0 0-11.34M62 159.56V48.44L221.74 104Z"></svg:path>`,
})
export class PhFlagPennantLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
