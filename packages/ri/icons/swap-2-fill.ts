import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSwap2FillIcon],svg[ri-swap-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.207 2.293l-1.414 1.414L18.086 6H13v2h5.086l-2.293 2.293l1.414 1.414L21.914 7zM7 11.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M5.914 18l2.293 2.293l-1.414 1.414L2.086 17l4.707-4.707l1.414 1.414L5.914 16H11v2zM14 13a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z"></svg:path>`,
})
export class RiSwap2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
