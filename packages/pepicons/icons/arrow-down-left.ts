import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsArrowDownLeftIcon],svg[pepicons-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.646 14.098a1 1 0 0 1-1.087.905l-5.185-.472a1 1 0 1 1 .181-1.991l5.186.471a1 1 0 0 1 .905 1.087Z"></svg:path><svg:path d="M5.903 7.354a1 1 0 0 1 1.086.906l.471 5.185a1 1 0 1 1-1.991.181l-.472-5.185a1 1 0 0 1 .906-1.087Z"></svg:path><svg:path d="M7.172 12.829a1 1 0 0 1 0-1.415l5.656-5.656a1 1 0 1 1 1.415 1.414l-5.657 5.657a1 1 0 0 1-1.414 0Z"></svg:path></svg:g>`,
})
export class PepiconsArrowDownLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
