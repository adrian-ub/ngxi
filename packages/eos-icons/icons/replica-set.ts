import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsReplicaSetIcon],svg[eos-icons-replica-set-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m0 8h-6v-6h6ZM16 7v4h-2V7H8v6h3v2H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2M4.003 8.998h-2V3.002a2 2 0 0 1 2-2h5.994v2H4.003Z"></svg:path>`,
})
export class EosIconsReplicaSetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
