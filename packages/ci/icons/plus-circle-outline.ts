import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciPlusCircleOutlineIcon],svg[ci-plus-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-8-9.828A8 8 0 1 0 4 12v.172ZM13 17h-2v-4H7v-2h4V7h2v4h4v2h-4v4Z"></svg:path>`,
})
export class CiPlusCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
