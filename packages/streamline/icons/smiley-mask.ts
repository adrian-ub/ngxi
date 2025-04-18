import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyMaskIcon],svg[streamline-smiley-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M3.797 5.377c.092-.179.38-.497.713-.69s.753-.282.954-.272m3.072-.002c.201-.01.62.08.954.273c.333.192.621.51.713.69M.5 7c.667.5 3 1.5 6.5 1.5s5.833-1 6.5-1.5"></svg:path><svg:path d="M7 13.5a6.5 6.5 0 0 0 3-.732V8.239c-.868.157-1.874.261-3 .261s-2.132-.104-3-.26v4.528a6.5 6.5 0 0 0 3 .732"></svg:path></svg:g>`,
})
export class StreamlineSmileyMaskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
