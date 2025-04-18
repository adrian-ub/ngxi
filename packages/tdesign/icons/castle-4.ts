import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle4Icon],svg[tdesign-castle-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2h-8v6.342a6 6 0 0 0-1-.259V7h-2v1.083a6 6 0 0 0-1 .259V2H2v20h20zM8 9.528A6 6 0 0 0 6 14v6H4V4h4zM8 20v-5h8v5h-3v-3h-2v3zm10 0v-6a6 6 0 0 0-2-4.472V4h4v16zm-2.126-7H8.126a4.003 4.003 0 0 1 7.748 0"></svg:path>`,
})
export class TdesignCastle4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
