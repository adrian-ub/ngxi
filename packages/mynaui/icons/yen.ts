import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiYenIcon],svg[mynaui-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.455 12H12m0 0H6.545M12 12L6 3.5m6 8.5l6-8.5M12 12v4.25m5.454 0H12m0 0H6.545m5.455 0v4.25"></svg:path>`,
})
export class MynauiYenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
