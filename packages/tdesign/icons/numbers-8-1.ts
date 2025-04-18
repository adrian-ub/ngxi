import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers81Icon],svg[tdesign-numbers-8-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m2.857 5.396a5 5 0 1 1-5.714 0a4.25 4.25 0 1 1 5.714 0M12 12a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path>`,
})
export class TdesignNumbers81Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
