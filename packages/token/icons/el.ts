import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenElIcon],svg[token-el-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.264 12.15L6.375 9.67v1.977l5.889 2.413l8.174-3.75v2.608l-8.174 3.72l-5.889-2.48v1.883l5.889 2.436l8.174-3.676v2.437L12.264 21l-8.701-3.549v-11.5L12 3l8.438 2.95v2.48z"></svg:path>`,
})
export class TokenElIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
