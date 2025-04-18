import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feCompressIcon],svg[fe-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 12h-6V6l2 2l3-3l2 2l-3 3zM6 12h6v6l-2-2l-3 3l-2-2l3-3z"></svg:path>`,
})
export class FeCompressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
