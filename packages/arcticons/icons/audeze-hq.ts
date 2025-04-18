import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAudezeHqIcon],svg[arcticons-audeze-hq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.192 35.824h15.616M26.907 7.089l-5.816.002L4.5 35.828l5.816-.003l2.938-5.082h15.62l-2.934-5.081h-9.748zL43.5 35.829l-2.938 5.08"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.999 22.298l10.747 18.614l5.816-.003l-13.654-23.651l-4.852 8.402M4.5 35.827l2.938 5.082l5.816-.003l2.938-5.081l-2.938-5.082"></svg:path>`,
})
export class ArcticonsAudezeHqIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
