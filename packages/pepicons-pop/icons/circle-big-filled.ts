import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCircleBigFilledIcon],svg[pepicons-pop-circle-big-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 10a9.5 9.5 0 1 1-19 0a9.5 9.5 0 0 1 19 0"></svg:path>`,
})
export class PepiconsPopCircleBigFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
