import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epMoreIcon],svg[ep-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 416a112 112 0 1 0 0 224a112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96a48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224a112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96a48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224a112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96a48 48 0 0 0 0-96"></svg:path>`,
})
export class EpMoreIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
