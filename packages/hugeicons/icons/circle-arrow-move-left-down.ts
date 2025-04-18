import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowMoveLeftDownIcon],svg[hugeicons-circle-arrow-move-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M9.512 11.638c-.53-.612-1.602-1.479-1.493-1.838m0 0c0-.42 1.052-1.219 1.493-1.804M8.019 9.8c1.92.122 4.393-.254 5.4.546c1.06.887.673 3.41.78 5.642m0 0c-.535.047-1.226-.985-1.835-1.52m1.835 1.52c.355.098 1.264-1.008 1.797-1.517"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowMoveLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
