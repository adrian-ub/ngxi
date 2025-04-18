import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPulseIcon],svg[game-icons-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16c-120 0-135 105-60 195c0-165 135-45 135-135c0-30-45-60-75-60m146.25 134.532C370.61 152.554 334.75 167.875 301 196c165 0 45 135 135 135c30 0 60-45 60-75c0-75-41.016-108.838-93.75-105.468M76 181c-30 0-60 45-60 75c0 120 105 135 195 60c-165 0-45-135-135-135m175.782 15A60 60 0 0 0 196 256a60 60 0 0 0 120 0a60 60 0 0 0-64.218-60M316 301c0 165-135 45-135 135c0 30 45 60 75 60c120 0 135-105 60-195"></svg:path>`,
})
export class GameIconsPulseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
