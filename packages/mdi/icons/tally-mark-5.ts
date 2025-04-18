import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTallyMark5Icon],svg[mdi-tally-mark-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10.73V19h-2v-7.64L15 12v7h-2v-6.38l-2 .64V19H9v-5.11l-2 .61V19H5v-3.85l-2.43.77L2 14l3-.95V5h2v7.42l2-.63V5h2v6.16l2-.63V5h2v4.9l2-.64V5h2v3.63L21 8l.57 1.92z"></svg:path>`,
})
export class MdiTallyMark5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
