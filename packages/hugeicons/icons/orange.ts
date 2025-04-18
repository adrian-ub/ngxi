import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsOrangeIcon],svg[hugeicons-orange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 14c0 4.418-3.806 8-8.5 8s-8.5-3.582-8.5-8S7.306 6 12 6s8.5 3.582 8.5 8M12 6c0-1.333.6-4 3-4m-3 4c-.5-1.167 0-4-6-4c.333 1 1 4 6 4" color="currentColor"></svg:path>`,
})
export class HugeiconsOrangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
