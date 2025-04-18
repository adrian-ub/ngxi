import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatElevenThirtyIcon],svg[fluent-emoji-flat-eleven-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E6E6E6" d="M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16S9.373 4 16 4s12 5.373 12 12"></svg:path><svg:path fill="#CA0B4A" d="M16.029 15.011a1 1 0 0 1 1 1v7.996a1 1 0 1 1-2 0V16.01a1 1 0 0 1 1-1"></svg:path><svg:path fill="#000" d="M12.516 9.966a1 1 0 0 1 1.366.366l2.984 5.168a1 1 0 1 1-1.732 1l-2.984-5.168a1 1 0 0 1 .366-1.366"></svg:path><svg:path fill="#636363" d="M16 27c6.075 0 11-4.925 11-11S22.075 5 16 5S5 9.925 5 16s4.925 11 11 11m0 3C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14"></svg:path><svg:path fill="#9B9B9B" d="M18.02 16.011a1.989 1.989 0 1 1-3.978 0a1.989 1.989 0 0 1 3.978 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatElevenThirtyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
