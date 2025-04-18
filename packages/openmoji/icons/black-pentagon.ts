import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBlackPentagonIcon],svg[openmoji-black-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M34.824 8.451a2 2 0 0 1 2.352 0l25.229 18.33c.701.51.994 1.412.727 2.236l-9.637 29.66a2 2 0 0 1-1.902 1.381H20.407a2 2 0 0 1-1.902-1.382L8.868 29.017a2 2 0 0 1 .727-2.236z"></svg:path><svg:path fill="#3F3F3F" d="M34.824 8.451a2 2 0 0 1 2.352 0l25.229 18.33c.701.51.994 1.412.727 2.236l-9.637 29.66a2 2 0 0 1-1.902 1.381H20.407a2 2 0 0 1-1.902-1.382L8.868 29.017a2 2 0 0 1 .727-2.236z"></svg:path><svg:path fill="none" stroke="#000" stroke-width="2" d="M35.054 8.382a2 2 0 0 1 2.352 0l25.229 18.33c.7.51.994 1.412.727 2.236l-9.637 29.659a2 2 0 0 1-1.902 1.382H20.637a2 2 0 0 1-1.902-1.382l-9.637-29.66a2 2 0 0 1 .727-2.235z"></svg:path>`,
})
export class OpenmojiBlackPentagonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
