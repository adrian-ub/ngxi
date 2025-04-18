import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonUrlIcon],svg[carbon-url-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 21V9h-2v14h8v-2zm-4-6v-4c0-1.103-.897-2-2-2h-6v14h2v-6h1.48l2.335 6h2.145l-2.333-6H18c1.103 0 2-.897 2-2m-6-4h4v4h-4zM8 23H4c-1.103 0-2-.897-2-2V9h2v12h4V9h2v12c0 1.103-.897 2-2 2"></svg:path>`,
})
export class CarbonUrlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
