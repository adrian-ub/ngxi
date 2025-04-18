import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextPositionMiddleIcon],svg[proicons-text-position-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2.75v6.086M9.081 6.33l2.212 2.212a1 1 0 0 0 .707.293m2.919-2.505l-2.212 2.212a1 1 0 0 1-.707.293m0 12.415v-6.086M9.081 17.67l2.212-2.212a1 1 0 0 1 .707-.293m2.919 2.505l-2.212-2.212a1 1 0 0 0-.707-.293M2.75 12h18.5"></svg:path>`,
})
export class ProiconsTextPositionMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
