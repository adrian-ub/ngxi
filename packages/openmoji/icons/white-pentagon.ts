import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWhitePentagonIcon],svg[openmoji-white-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M34.824 10.451a2 2 0 0 1 2.352 0l25.229 18.33c.701.51.994 1.412.727 2.236l-9.637 29.659a2 2 0 0 1-1.902 1.382H20.407a2 2 0 0 1-1.902-1.382L8.868 31.017a2 2 0 0 1 .727-2.236z"></svg:path><svg:path fill="none" stroke="#000" stroke-width="2" d="M34.824 10.451a2 2 0 0 1 2.352 0l25.229 18.33c.701.51.994 1.412.727 2.236l-9.637 29.659a2 2 0 0 1-1.902 1.382H20.407a2 2 0 0 1-1.902-1.382L8.868 31.017a2 2 0 0 1 .727-2.236z"></svg:path>`,
})
export class OpenmojiWhitePentagonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
