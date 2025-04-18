import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsReplicaIcon],svg[eos-icons-replica-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m0 8h-6v-6h6ZM12 3H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3v-2H6V5h6v4h2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class EosIconsReplicaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
