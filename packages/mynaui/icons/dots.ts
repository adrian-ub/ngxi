import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiDotsIcon],svg[mynaui-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12.25v-.5m4 .5v-.5m-8 .5v-.5"></svg:path>`,
})
export class MynauiDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
