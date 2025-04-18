import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAnimationIcon],svg[tdesign-animation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.09 7.054l.11-.46q.027-.091.057-.181l.371-.841a5 5 0 1 1 6.491 6.958l-.532.213l-.117.037l-.511.128Q16.493 13 16 13a5 5 0 0 1-4.91-5.946M9.47 5.471a7.02 7.02 0 0 0-4 4A7.002 7.002 0 0 0 8 23a7 7 0 0 0 6.529-4.47q.198-.078.39-.166l.338-.135l-.01-.026a7.03 7.03 0 0 0 3.282-3.674q.198-.076.392-.165l.336-.135l-.01-.026A7 7 0 1 0 9.47 5.471M16 15a5 5 0 0 1-1.882 1.53l-.53.212l-.12.04l-.507.126q-.467.091-.961.092a5 5 0 0 1-4.91-5.946l.11-.46q.027-.091.057-.181l.372-.842A5 5 0 0 1 9 7.999V8a7 7 0 0 0 7 7M5 12a7 7 0 0 0 7 7a5 5 0 1 1-7-7"></svg:path>`,
})
export class TdesignAnimationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
