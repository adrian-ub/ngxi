import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsBorderInnerIcon],svg[zondicons-border-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9V1h2v8h8v2h-8v8H9v-8H1V9zM1 1h2v2H1zm0 4h2v2H1zm0 8h2v2H1zm0 4h2v2H1zM5 1h2v2H5zm0 16h2v2H5zm8-16h2v2h-2zm0 16h2v2h-2zm4-16h2v2h-2zm0 4h2v2h-2zm0 8h2v2h-2zm0 4h2v2h-2z"></svg:path>`,
})
export class ZondiconsBorderInnerIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
