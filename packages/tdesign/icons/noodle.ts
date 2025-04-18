import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNoodleIcon],svg[tdesign-noodle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3h7v2h-1v5h1v2c0 5.523-4.477 10-10 10S2 17.523 2 12v-2h1a6 6 0 1 1 12 0h1V5h-1zm3 2v5h1V5zM4 12a8 8 0 1 0 16 0zm1-2h1a3 3 0 0 1 6 0h1a4 4 0 0 0-8 0m5 0a1 1 0 0 0-2 0z"></svg:path>`,
})
export class TdesignNoodleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
