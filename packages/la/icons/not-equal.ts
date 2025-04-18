import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laNotEqualIcon],svg[la-not-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.719 5.281L5.28 6.72l20 20l1.438-1.438L21.437 20H27v-2h-7.563l-4-4H27v-2H13.437zM5 12v2h4.906l-2-2zm0 6v2h10.906l-2-2z"></svg:path>`,
})
export class LaNotEqualIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
