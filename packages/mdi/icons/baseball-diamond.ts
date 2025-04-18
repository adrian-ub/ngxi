import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBaseballDiamondIcon],svg[mdi-baseball-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.79 12.79L2 9s4-6 10-6s10 6 10 6l-3.79 3.79L12 6.59zM13.5 18h-3v2l1.5 1l1.5-1zm3.29-3.79L14.2 16.8c-.6-.49-1.36-.8-2.2-.8s-1.6.31-2.2.8l-2.59-2.59L12 9.41zM13 14c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1"></svg:path>`,
})
export class MdiBaseballDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
