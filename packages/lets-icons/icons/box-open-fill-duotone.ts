import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxOpenFillDuotoneIcon],svg[lets-icons-box-open-fill-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12h14v4c0 1.886 0 2.828-.586 3.414S16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586S5 17.886 5 16z"></svg:path><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M2.815 7.815L5 10v1h14v-1l2.185-2.185a1 1 0 0 0-.107-1.507l-2.512-1.883a1 1 0 0 0-1.155-.033L15 6H9L6.589 4.392a1 1 0 0 0-1.155.032L2.922 6.309a1 1 0 0 0-.107 1.507M8.6 7.2h6.8l1.95 2.6H6.65z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsBoxOpenFillDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
