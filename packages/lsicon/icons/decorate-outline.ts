import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDecorateOutlineIcon],svg[lsicon-decorate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M8 11V8.5H2.5v-4h2m0-2v4h9v-4zM9 14H7v-3.5h2z"></svg:path>`,
})
export class LsiconDecorateOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
