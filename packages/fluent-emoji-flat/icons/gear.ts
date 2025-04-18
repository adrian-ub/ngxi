import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatGearIcon],svg[fluent-emoji-flat-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#B4ACBC" d="M12.847 3.834A2 2 0 0 1 14.84 2h2.32a2 2 0 0 1 1.993 1.834l.235 2.825a.5.5 0 0 0 .821.34l2.164-1.831a2 2 0 0 1 2.706.112l1.64 1.64a2 2 0 0 1 .113 2.707l-1.83 2.163a.5.5 0 0 0 .34.822l2.824.235A2 2 0 0 1 30 14.84v2.32a2 2 0 0 1-1.834 1.993l-2.825.235a.5.5 0 0 0-.34.821l1.831 2.164a2 2 0 0 1-.112 2.706l-1.64 1.64a2 2 0 0 1-2.707.113l-2.164-1.83a.5.5 0 0 0-.82.34l-.236 2.824A2 2 0 0 1 17.16 30h-2.32a2 2 0 0 1-1.993-1.834l-.235-2.825a.5.5 0 0 0-.822-.34l-2.163 1.831a2 2 0 0 1-2.706-.112l-1.64-1.64a2 2 0 0 1-.113-2.707l1.83-2.164a.5.5 0 0 0-.34-.82l-2.824-.236A2 2 0 0 1 2 17.16v-2.32a2 2 0 0 1 1.834-1.993l2.825-.235a.5.5 0 0 0 .34-.822L5.168 9.628A2 2 0 0 1 5.28 6.92l1.64-1.64a2 2 0 0 1 2.707-.113l2.163 1.83a.5.5 0 0 0 .822-.34zM21 16a5 5 0 1 0-10 0a5 5 0 0 0 10 0"></svg:path><svg:path fill="#998EA4" d="M24 16a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-3.5 0a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0"></svg:path><svg:path fill="#CDC4D6" d="M10.5 16a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M21 16a5 5 0 1 0-10 0a5 5 0 0 0 10 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatGearIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
