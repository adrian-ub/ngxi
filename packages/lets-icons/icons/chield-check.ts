import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldCheckIcon],svg[lets-icons-chield-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M18.702 5.784L12.788 3.25a2 2 0 0 0-1.576 0L5.298 5.784A2 2 0 0 0 4.1 7.871l.613 4.904a7 7 0 0 0 2.465 4.509l3.54 2.95a2 2 0 0 0 2.561 0l3.541-2.95a7 7 0 0 0 2.465-4.51l.613-4.903a2 2 0 0 0-1.197-2.087Z"></svg:path><svg:path d="m9 12l2.569 2.569a.5.5 0 0 0 .77-.077L16 9"></svg:path></svg:g>`,
})
export class LetsIconsChieldCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
