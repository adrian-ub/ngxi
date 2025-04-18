import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForTimorLesteIcon],svg[emojione-flag-for-timor-leste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed4c5c" d="M32 2c-7.6 0-14.6 2.9-19.9 7.6v44.9C17.4 59.1 24.4 62 32 62c16.6 0 30-13.4 30-30S48.6 2 32 2"></svg:path><svg:path fill="#ffce31" d="M12.1 9.6q-1.95 1.8-3.6 3.9v37.1q1.65 2.1 3.6 3.9L42 32z"></svg:path><svg:path fill="#3e4347" d="M8.4 13.4C4.4 18.5 2 25 2 32s2.4 13.5 6.4 18.6L27 32z"></svg:path><svg:path fill="#fff" d="m10.3 33.9l2.4 5.1l1-5.3l5.3-.4l-4.8-3l1-5.3l-3.9 3.5l-4.8-2.9l2.4 5.1L5 34.3z"></svg:path>`,
})
export class EmojioneFlagForTimorLesteIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
