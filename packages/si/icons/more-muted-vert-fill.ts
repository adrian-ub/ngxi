import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siMoreMutedVertFillIcon],svg[si-more-muted-vert-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2m1 6h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2m0 6h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2"></svg:path>`,
})
export class SiMoreMutedVertFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
