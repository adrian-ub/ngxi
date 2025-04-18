import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitCheckCircleIcon],svg[uit-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.809 8.646l-5.647 5.647l-2.47-2.47l-.008-.007a.5.5 0 1 0-.7.714l2.825 2.824a.5.5 0 0 0 .707 0l6-6l.007-.008a.5.5 0 0 0-.714-.7M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c5.52-.006 9.994-4.48 10-10c0-5.523-4.477-10-10-10m0 19a9 9 0 1 1 0-18a9.01 9.01 0 0 1 9 9a9 9 0 0 1-9 9"></svg:path>`,
})
export class UitCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
