import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRepeatIcon],svg[mynaui-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m17 3l4 3l-4 3"></svg:path><svg:path d="M3 12v-2a4 4 0 0 1 4-4h14M7 21l-4-3l4-3"></svg:path><svg:path d="M21 12v2a4 4 0 0 1-4 4H3"></svg:path></svg:g>`,
})
export class MynauiRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
