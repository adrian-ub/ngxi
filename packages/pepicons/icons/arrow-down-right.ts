import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsArrowDownRightIcon],svg[pepicons-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.098 7.354a1 1 0 0 1 .905 1.087l-.472 5.185a1 1 0 1 1-1.991-.18l.471-5.186a1 1 0 0 1 1.087-.906Z"></svg:path><svg:path d="M7.354 14.098a1 1 0 0 1 .906-1.087l5.185-.471a1 1 0 1 1 .181 1.991l-5.185.472a1 1 0 0 1-1.087-.905Z"></svg:path><svg:path d="M12.828 12.829a1 1 0 0 1-1.414 0L5.757 7.171a1 1 0 1 1 1.415-1.415l5.656 5.657a1 1 0 0 1 0 1.415Z"></svg:path></svg:g>`,
})
export class PepiconsArrowDownRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
