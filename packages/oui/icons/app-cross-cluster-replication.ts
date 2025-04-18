import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppCrossClusterReplicationIcon],svg[oui-app-cross-cluster-replication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h8.7l5.3-6V0zm2 2h10v7H7v5H2zm8.45 9L9 12.64V11zM18 16v16h8.7l5.3-6V16zm2 2h10v7h-5v5h-5zm8.45 9L27 28.64V27z"></svg:path><svg:path fill="currentColor" d="M5 18H3c0 6.075 4.925 11 11 11h2v-2h-2a9 9 0 0 1-9-9M18 3h-2v2h2a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11" class="ouiIcon__fillSecondary"></svg:path>`,
})
export class OuiAppCrossClusterReplicationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
