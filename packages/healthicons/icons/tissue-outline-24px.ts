import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTissueOutline24pxIcon],svg[healthicons-tissue-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.29 9.868a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m6.73-.36a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m5.23.36a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M13.5 15.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m4.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m-11.21-.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill-rule="evenodd" d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm5.072 2H4v3.608L7.668 11.8zm1.502 0a.8.8 0 0 1-.026.298l-1.352 4.62l5.769-1.346l-1.204-3.354A.8.8 0 0 1 13.718 7zm4.702 0l1.315 3.662L20 12.108V7zm.054 5.028L9.66 13.35l1.355 3.474a.8.8 0 0 1 .046.176h3.053zM15.659 17l1.13-4.625l2.756 1.17c.15.063.308.074.455.042V17zm-6.185 0l-1.357-3.477L4 12.185V17z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTissueOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
