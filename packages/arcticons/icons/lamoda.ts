import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLamodaIcon],svg[arcticons-lamoda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.172 5.5L7.82 34.866c-.288 2.517 1.318 4.4 4.014 4.706l1.348.153m25.403-5.615c-.527 4.614-5.002 7.93-9.945 7.37h0c-4.942-.561-8.555-4.796-8.028-9.41l.623-5.455c.527-4.614 5.002-7.93 9.945-7.37h0c4.942.561 8.555 4.796 8.028 9.41M37.627 42.5l2.587-22.654"></svg:path>`,
})
export class ArcticonsLamodaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
