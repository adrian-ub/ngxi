import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBasketFilledIcon],svg[lsicon-basket-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.277 3.084a.5.5 0 0 0-.554 0L4.849 5H1v1h1.066l.939 6.57A.5.5 0 0 0 3.5 13h9a.5.5 0 0 0 .495-.43L13.934 6H15V5h-3.849zM8 4.101L9.349 5H6.65zM5.5 10.5v-3h1v3zm2 0v-3h1v3zm2-3v3h1v-3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBasketFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
