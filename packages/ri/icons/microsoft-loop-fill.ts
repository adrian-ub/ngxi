import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMicrosoftLoopFillIcon],svg[ri-microsoft-loop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10H6.665A7.99 7.99 0 0 0 10 15.5h2A3.5 3.5 0 1 0 8.5 12v3.5A6.5 6.5 0 0 1 2 22V12C2 6.477 6.477 2 12 2s10 4.477 10 10"></svg:path>`,
})
export class RiMicrosoftLoopFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
