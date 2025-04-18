import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEurocardIcon],svg[arcticons-eurocard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.167 29.55l-7.352-7.353a5.6 5.6 0 0 0 0 7.917L18.56 40.86a5.6 5.6 0 0 0 7.917 0l-7.352-7.352L31.59 21.043a5.6 5.6 0 0 0 0-7.917z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.512 13.417a5.6 5.6 0 0 0 0-7.917L14.047 15.965a5.6 5.6 0 0 0 0 7.916zm15.673 13.736a5.6 5.6 0 0 0 0-7.917L28.752 30.67a5.6 5.6 0 0 0 0 7.916z"></svg:path>`,
})
export class ArcticonsEurocardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
