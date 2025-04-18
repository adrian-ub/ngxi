import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidBriefcaseIcon],svg[heroicons-solid-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6 6V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2a2 2 0 0 1 2 2v3.57A23 23 0 0 1 10 13a23 23 0 0 1-8-1.43V8a2 2 0 0 1 2-2zm2-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H8zm1 5a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path><svg:path d="M2 13.692V16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.308A25 25 0 0 1 10 15a25 25 0 0 1-8-1.308"></svg:path></svg:g>`,
})
export class HeroiconsSolidBriefcaseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
