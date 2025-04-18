import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatRunningShirtIcon],svg[fluent-emoji-flat-running-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#44911B" d="M16 8c-2.5 0-4-2-4-2v4h8V6s-1.5 2-4 2"></svg:path><svg:path fill="#44911B" d="M12.25 2h-3.5a.75.75 0 0 0-.75.75V11a2 2 0 0 1-2 2h-.25a.75.75 0 0 0-.75.75v14.035l.216-.125L23.87 7l.13-.362V2.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75V7a3 3 0 1 1-6 0V2.75a.75.75 0 0 0-.75-.75m11.776 9.322l-.272.114L7.346 29.674L7.244 30H5.75h20.5a.75.75 0 0 0 .75-.75v-15.5a.75.75 0 0 0-.75-.75H26a2 2 0 0 1-1.974-1.678"></svg:path><svg:path fill="#FCD53F" d="M7.244 30H5.75a.75.75 0 0 1-.75-.75v-1.465L24 6.638V11q0 .165.026.322z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatRunningShirtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
