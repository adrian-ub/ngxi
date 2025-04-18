import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentComponent2DoubleTapSwipeDown24FilledIcon],svg[fluent-component-2-double-tap-swipe-down-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15.71v-1.585A5.502 5.502 0 0 1 12 3.5a5.5 5.5 0 0 1 2.21 10.538l-.21.087l.001 1.585a7 7 0 1 0-4.247-.078zm0-2.678v-1.796a3 3 0 1 1 4.138-.132l-.137.131v1.797a4.5 4.5 0 1 0-4.192-.1zm1.387 8.758a1 1 0 0 0 1.226 0l.094-.083l3-3l.083-.094a1 1 0 0 0 0-1.226l-.083-.094l-.094-.083a1 1 0 0 0-1.226 0l-.094.083L13 18.585V9a1 1 0 0 0-1.993-.117L11 9v9.585l-1.293-1.292l-.094-.083a1 1 0 0 0-1.403 1.403l.083.094l3 3z"></svg:path>`,
})
export class FluentComponent2DoubleTapSwipeDown24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
