import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconMention16Icon],svg[octicon-mention-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 2.37a6.501 6.501 0 0 0 6.5 11.26a.75.75 0 0 1 .75 1.298A7.999 7.999 0 0 1 .989 4.148A8 8 0 0 1 16 7.75v1.5a2.75 2.75 0 0 1-5.072 1.475a3.999 3.999 0 0 1-6.65-4.19A4 4 0 0 1 12 8v1.25a1.25 1.25 0 0 0 2.5 0V7.867a6.5 6.5 0 0 0-9.75-5.496ZM10.5 8a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class OcticonMention16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
