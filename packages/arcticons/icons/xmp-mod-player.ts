import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXmpModPlayerIcon],svg[arcticons-xmp-mod-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 10.419H28.269L24 15.603l-4.269-5.184H5.5l11.385 13.824L5.5 38.067h14.231L24 32.883l10.063 12.198l8.437-7.014l-11.385-13.824z"></svg:path>`,
})
export class ArcticonsXmpModPlayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
