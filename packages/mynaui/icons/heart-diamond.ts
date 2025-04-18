import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiHeartDiamondIcon],svg[mynaui-heart-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"></svg:path><svg:path d="M10.291 9.5a1.78 1.78 0 0 0-1.781 1.781c0 1.969 3.375 4.219 3.375 4.219s3.375-2.25 3.375-4.219c0-1.219-.797-1.781-1.781-1.781c-.698 0-1.302.4-1.594.985a1.78 1.78 0 0 0-1.594-.985"></svg:path></svg:g>`,
})
export class MynauiHeartDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
