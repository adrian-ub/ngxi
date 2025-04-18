import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibHighlyIcon],svg[cib-highly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.599 27.197h4.803V32h-4.803zM12 0h8v24h-8z"></svg:path>`,
})
export class CibHighlyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
