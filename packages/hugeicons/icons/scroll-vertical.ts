import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScrollVerticalIcon],svg[hugeicons-scroll-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0M11.933 2c1.38-.04 4.628 5.345 3.983 5.852c-.73.575-2.902-.8-3.594-1.11c-.416-.186-.596-.181-1.012.03c-1.881.96-2.818 1.436-3.224 1.14c-.646-.471 2.5-5.872 3.847-5.912m.134 20c-1.38.04-4.628-5.32-3.983-5.824c.73-.573 2.902.796 3.594 1.104c.416.185.596.18 1.012-.03c.58-.295 2.51-1.65 3.224-1.134c.646.469-2.5 5.844-3.847 5.884" color="currentColor"></svg:path>`,
})
export class HugeiconsScrollVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
