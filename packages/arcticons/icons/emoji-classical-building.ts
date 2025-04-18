import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiClassicalBuildingIcon],svg[arcticons-emoji-classical-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.004 5.549l-13.101 7.514h26.202zM5.5 39.374h37v3.077h-37zM7.188 13.07h33.64v3.083H7.188zm.84 23.121h31.96v3.077H8.028zm2.374-20.038h3.312V36.19h-3.312zm6.936 0h3.312V36.19h-3.312zm16.954 0h3.313V36.19h-3.313zm-6.936 0h3.313V36.19h-3.313z"></svg:path>`,
})
export class ArcticonsEmojiClassicalBuildingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
