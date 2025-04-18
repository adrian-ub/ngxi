import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCreativeCommonsByIcon],svg[humbleicons-creative-commons-by-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.5 10.5V18h-1v-7.5m1 0h-1m1 0H14v3m-2.5-3H10v3M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-8-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class HumbleiconsCreativeCommonsByIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
