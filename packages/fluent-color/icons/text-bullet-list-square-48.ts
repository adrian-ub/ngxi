import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorTextBulletListSquare48Icon],svg[fluent-color-text-bullet-list-square-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorTextBulletListSquare480)" d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75v-23.5A6.25 6.25 0 0 0 35.75 6z"></svg:path><svg:path fill="url(#fluentColorTextBulletListSquare481)" d="M17 15.75a2 2 0 1 0-4 0a2 2 0 0 0 4 0m0 8a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-2 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m4-18c0 .69.56 1.25 1.25 1.25h13.5a1.25 1.25 0 1 0 0-2.5h-13.5c-.69 0-1.25.56-1.25 1.25m1.25 6.75a1.25 1.25 0 1 0 0 2.5h13.5a1.25 1.25 0 1 0 0-2.5zM19 31.75c0 .69.56 1.25 1.25 1.25h13.5a1.25 1.25 0 1 0 0-2.5h-13.5c-.69 0-1.25.56-1.25 1.25"></svg:path><svg:defs><svg:lineargradient id="fluentColorTextBulletListSquare480" x1="7.286" x2="32.13" y1="12.75" y2="38.562" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorTextBulletListSquare481" x1="17.231" x2="30.936" y1="15.289" y2="51.813" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorTextBulletListSquare48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
