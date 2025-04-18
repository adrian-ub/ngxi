import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecondBracketCircleIcon],svg[hugeicons-second-bracket-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 8c.65.065 1.088.211 1.414.542C17 9.135 17 10.09 17 12s0 2.865-.586 3.458c-.326.33-.764.477-1.414.542m-6 0c-.65-.065-1.088-.211-1.414-.542C7 14.865 7 13.91 7 12s0-2.865.586-3.458C7.912 8.212 8.35 8.065 9 8"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class HugeiconsSecondBracketCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
