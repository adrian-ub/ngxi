import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsWorkloadIcon],svg[eos-icons-workload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4Z"></svg:path><svg:path fill="currentColor" d="M10 10h8v2h-8zm0 3h8v2h-8zm3.47-8.01h-2.31L10 7l1.16 2h2.31l1.16-2z"></svg:path><svg:path fill="currentColor" d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 14H8V4h12Z"></svg:path>`,
})
export class EosIconsWorkloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
