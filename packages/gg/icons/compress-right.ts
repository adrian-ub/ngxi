import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCompressRightIcon],svg[gg-compress-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.567 8.03l6.343-6.26l1.405 1.423l-6.323 6.24l3.57.015l-.009 2l-7-.028l.028-7l2 .008zm-6.588 6.513l-3.57.003l-.002-2l7-.006l.006 7l-2 .002l-.003-3.602l-6.314 6.29l-1.411-1.416z"></svg:path>`,
})
export class GgCompressRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
