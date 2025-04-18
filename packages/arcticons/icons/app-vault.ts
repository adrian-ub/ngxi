import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAppVaultIcon],svg[arcticons-app-vault-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.5 11h-33a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2V13a2 2 0 0 0-2-2M39 10V6.5a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1M9 38v3.5a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V38a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 15h7v7h-7z"></svg:path>`,
})
export class ArcticonsAppVaultIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
