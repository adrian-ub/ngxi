import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsClusterIcon],svg[eos-icons-cluster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 13v10h22V13Zm12 6H4v-2h9Zm3 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1M1 1v10h22V1Zm12 6H4V5h9Zm3 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class EosIconsClusterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
