import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitArrowCircleRightIcon],svg[uit-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.961 11.809a.5.5 0 0 0-.108-.163l-4.5-4.5a.5.5 0 0 0-.707.708l3.647 3.646H7.5a.5.5 0 0 0 0 1h7.793l-3.647 3.646a.5.5 0 1 0 .707.708l4.5-4.5a.5.5 0 0 0 .145-.344L17 12l-.001-.007a.5.5 0 0 0-.038-.184M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.52-.006 9.994-4.48 10-10c0-5.523-4.477-10-10-10m0 19a9 9 0 1 1 0-18a9.01 9.01 0 0 1 9 9a9 9 0 0 1-9 9"></svg:path>`,
})
export class UitArrowCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
