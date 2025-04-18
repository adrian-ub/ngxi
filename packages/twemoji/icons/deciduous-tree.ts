import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiDeciduousTreeIcon],svg[twemoji-deciduous-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#662113" d="M22 33c0 2.209-1.791 3-4 3s-4-.791-4-3l1-9c0-2.209.791-2 3-2s3-.209 3 2z"></svg:path><svg:path fill="#5C913B" d="M34 17c0 8.837-7.163 12-16 12S2 25.837 2 17S11 0 18 0s16 8.164 16 17"></svg:path><svg:g fill="#3E721D"><svg:ellipse cx="6" cy="21" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="30" cy="21" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="10" cy="25" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="14" cy="22" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="10" cy="16" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="7" cy="12" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="29" cy="12" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="14" cy="10" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="22" cy="10" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="26" cy="16" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="18" cy="17" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="22" cy="22" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="18" cy="26" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="26" cy="25" rx="2" ry="1"></svg:ellipse></svg:g>`,
})
export class TwemojiDeciduousTreeIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
