import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorFood16Icon],svg[fluent-color-food-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorFood160)" d="M13.5 1A4.5 4.5 0 0 0 9 5.5V7a1 1 0 0 0 1 1h.944l-.02.191c-.046.452-.109 1.062-.172 1.7c-.123 1.255-.252 2.663-.252 3.109a2 2 0 1 0 4 0c0-.446-.129-1.854-.252-3.11a304 304 0 0 0-.23-2.24L14 7.473V1.5a.5.5 0 0 0-.5-.5"></svg:path><svg:path fill="url(#fluentColorFood161)" d="M6.723 1.054a.5.5 0 0 1 .265.335C7.006 1.468 7.5 3.582 7.5 5c0 .95-.442 1.797-1.13 2.346c-.25.2-.37.418-.37.6v.486q0 .035.004.066c.034.248.157 1.169.272 2.124c.113.937.224 1.959.224 2.378a2 2 0 1 1-4 0c0-.42.111-1.44.224-2.378c.115-.955.238-1.876.272-2.124L3 8.432v-.486c0-.182-.12-.4-.37-.6A3 3 0 0 1 1.5 5c0-1.413.49-3.516.512-3.61A.505.505 0 0 1 2.505 1c.28 0 .507.227.507.507v2.998A.495.495 0 1 0 4 4.5v-3a.5.5 0 0 1 1 0v3.026a.495.495 0 0 0 .99-.021v-3c0-.279.226-.505.506-.505c.022 0 .12 0 .227.054"></svg:path><svg:defs><svg:lineargradient id="fluentColorFood160" x1="8.154" x2="21.198" y1="1.875" y2="6.749" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorFood161" x1=".577" x2="14.483" y1="1.875" y2="7.543" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorFood16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
