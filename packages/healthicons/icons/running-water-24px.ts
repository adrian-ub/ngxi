import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRunningWater24pxIcon],svg[healthicons-running-water-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 2v20h2v-9h2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1h1a1 1 0 0 1 1 1v2h6v-3a6 6 0 0 0-6-6h-2a1 1 0 0 0-1-1h-2V4h2a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2h2v2H7a1 1 0 0 0-1 1H4V2zm10 6H8v4h4z" clip-rule="evenodd"></svg:path><svg:path d="m19 16.537l.73.78l.001.001l.002.002l.005.005l.013.014a4 4 0 0 1 .178.208c.11.133.257.324.406.55c.268.407.665 1.11.665 1.873c0 1.093-.867 2.03-2 2.03s-2-.937-2-2.03c0-.763.397-1.466.665-1.873a7 7 0 0 1 .584-.758l.014-.014l.004-.005l.002-.002z"></svg:path></svg:g>`,
})
export class HealthiconsRunningWater24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
