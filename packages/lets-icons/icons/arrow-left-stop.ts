import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowLeftStopIcon],svg[lets-icons-arrow-left-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10 12l-.707-.707l-.707.707l.707.707zm10 1a1 1 0 1 0 0-2zm-4.707-7.707l-6 6l1.414 1.414l6-6zm-6 7.414l6 6l1.414-1.414l-6-6zM10 13h10v-2H10z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M4 5v14"></svg:path></svg:g>`,
})
export class LetsIconsArrowLeftStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
