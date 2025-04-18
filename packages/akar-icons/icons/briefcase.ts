import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsBriefcaseIcon],svg[akar-icons-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="12" x="3" y="7" rx="2"></svg:rect><svg:path d="M9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1H9zm1 6l.211.106a4 4 0 0 0 3.578 0L14 12"></svg:path></svg:g>`,
})
export class AkarIconsBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
