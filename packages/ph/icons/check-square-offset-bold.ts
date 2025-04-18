import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareOffsetBoldIcon],svg[ph-check-square-offset-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48v160a20 20 0 0 1-20 20h-68a12 12 0 0 1 0-24h64V52H52v88a12 12 0 0 1-24 0V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20m-99.51 103.51a12 12 0 0 0-17 0L64 199l-15.51-15.49a12 12 0 1 0-17 17l24 24a12 12 0 0 0 17 0l56-56a12 12 0 0 0 0-17"></svg:path>`,
})
export class PhCheckSquareOffsetBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
