import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPadOutlineIcon],svg[lsicon-pad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M12.5 9.5v-3m-11-3h13v9h-13z"></svg:path>`,
})
export class LsiconPadOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
