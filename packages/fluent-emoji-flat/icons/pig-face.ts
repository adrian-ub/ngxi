import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPigFaceIcon],svg[fluent-emoji-flat-pig-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FF8687" d="M3 17C3 10.373 8.373 5 15 5h1.998c6.627 0 12 5.373 12 12v1c0 6.627-5.373 12-12 12H15C8.373 30 3 24.627 3 18z"></svg:path><svg:path fill="#FBB8AB" d="m26.38 5.634l3.044 3.331c.768.841.768 2.221 0 3.062l-3.045 3.332c-1.25 1.37-3.379.399-3.379-1.531V7.175c0-1.93 2.138-2.9 3.38-1.541M5.62 5.633l-3.044 3.34c-.768.84-.768 2.218 0 3.058l3.045 3.329C6.87 16.727 9 15.758 9 13.83V7.173c0-1.928-2.128-2.897-3.38-1.54M14 19a3 3 0 1 0 0 6h4a3 3 0 1 0 0-6z"></svg:path><svg:path fill="#F92F60" d="M15 22a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="#1C1C1C" d="M11 16c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1zm8 0c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPigFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
