import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSleeperChairIcon],svg[iconoir-sleeper-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 18v3m1-11V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5"></svg:path><svg:path d="M19.5 10a2.5 2.5 0 0 0-2.5 2.5V14H7v-1.5a2.5 2.5 0 1 0-3 2.45V18h16v-3.05a2.5 2.5 0 0 0-.5-4.95m.5 8v3"></svg:path></svg:g>`,
})
export class IconoirSleeperChairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
