import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowRightStopIcon],svg[lets-icons-arrow-right-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m14 12l.707-.707l.707.707l-.707.707zM4 13a1 1 0 1 1 0-2zm4.707-7.707l6 6l-1.414 1.414l-6-6zm6 7.414l-6 6l-1.414-1.414l6-6zM14 13H4v-2h10z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M20 5v14"></svg:path></svg:g>`,
})
export class LetsIconsArrowRightStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
