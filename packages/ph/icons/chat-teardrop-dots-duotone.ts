import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatTeardropDotsDuotoneIcon],svg[ph-chat-teardrop-dots-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 124a92 92 0 0 1-92 92H48a8 8 0 0 1-8-8v-84a92 92 0 0 1 92-92a92 92 0 0 1 92 92" opacity=".2"></svg:path><svg:path d="M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m0 184H48v-84a84 84 0 1 1 84 84m12-80a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhChatTeardropDotsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
