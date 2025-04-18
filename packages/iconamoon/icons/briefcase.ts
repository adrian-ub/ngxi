import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonBriefcaseIcon],svg[iconamoon-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-width="2" d="M5 16h14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM4 7h16v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-width="3" d="M12 12h.01v.01H12z"></svg:path><svg:path stroke-width="2" d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9z"></svg:path></svg:g>`,
})
export class IconamoonBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
