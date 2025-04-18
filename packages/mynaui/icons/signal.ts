import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSignalIcon],svg[mynaui-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 10v4m-4-8v12M12 3v18M7.5 6v12m-4-8v4"></svg:path>`,
})
export class MynauiSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
