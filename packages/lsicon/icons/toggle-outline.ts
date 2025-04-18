import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconToggleOutlineIcon],svg[lsicon-toggle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m4 6l4-4.5L12 6m-8 4l4 4.5l4-4.5"></svg:path>`,
})
export class LsiconToggleOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
