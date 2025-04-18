import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPrismIcon],svg[tabler-prism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 9v13m7-4.83l-5.98 4.485a1.7 1.7 0 0 1-2.04 0L5 17.17a2.5 2.5 0 0 1-1-2V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11.17a2.5 2.5 0 0 1-1 2"></svg:path><svg:path d="m4.3 3.3l6.655 5.186a1.7 1.7 0 0 0 2.09 0L19.7 3.3"></svg:path></svg:g>`,
})
export class TablerPrismIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
