import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciInfoCircleOutlineIcon],svg[ci-info-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-8-9.828A8 8 0 1 0 4 12v.172ZM14 17h-3v-4h-1v-2h3v4h1v2Zm-1-8h-2V7h2v2Z"></svg:path>`,
})
export class CiInfoCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
