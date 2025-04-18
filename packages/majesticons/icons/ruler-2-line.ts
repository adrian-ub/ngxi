import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsRuler2LineIcon],svg[majesticons-ruler-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 12l-1.586 1.586a2 2 0 0 0 0 2.828l3.172 3.172a2 2 0 0 0 2.828 0l9.172-9.172a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0L12 6m-6 6l2 2m-2-2l3-3m3-3l2 2m-2-2L9 9m0 0l3 3"></svg:path>`,
})
export class MajesticonsRuler2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
