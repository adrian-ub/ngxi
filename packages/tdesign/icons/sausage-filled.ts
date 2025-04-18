import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSausageFilledIcon],svg[tdesign-sausage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.998 2.003v1.996h2.004v2h-1.257a4.22 4.22 0 0 1-1.04 4.268l-9.44 9.44a4.22 4.22 0 0 1-4.267 1.04V22h-2v-2H2.002v-2h1.249a4.22 4.22 0 0 1 1.04-4.269l9.44-9.44a4.22 4.22 0 0 1 4.267-1.04v-1.25z"></svg:path>`,
})
export class TdesignSausageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
