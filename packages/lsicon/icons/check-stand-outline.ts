import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCheckStandOutlineIcon],svg[lsicon-check-stand-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6 9h2.5c.55 0 1-.45 1-1s-.45-1-1-1h-1c-.55 0-1-.45-1-1s.45-1 1-1H10M8 3.5v1.167M8 8.5v2m-3 3h6m-8.5-2v-9h11v9z"></svg:path>`,
})
export class LsiconCheckStandOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
