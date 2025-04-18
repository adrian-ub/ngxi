import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCompassIcon],svg[hugeicons-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="13" r="9"></svg:circle><svg:path d="M12 3.5V2m-2 0h4m.773 8.257c.733.727-.44 6.636-1.644 6.74c-1.01.088-1.325-1.904-1.538-2.536c-.21-.623-.443-.847-1.061-1.052c-1.57-.519-2.355-.779-2.51-1.19c-.412-1.089 5.816-2.89 6.753-1.962"></svg:path></svg:g>`,
})
export class HugeiconsCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
