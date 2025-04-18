import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiToyBrickRemoveOutlineIcon],svg[mdi-toy-brick-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6V5c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v1h-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v1H3v14h11v-2H5V8h14v5h2V6m-3.12 9.46L20 17.59l2.12-2.12l1.42 1.41L21.41 19l2.13 2.12l-1.42 1.42L20 20.41l-2.12 2.13l-1.42-1.42L18.59 19l-2.12-2.12"></svg:path>`,
})
export class MdiToyBrickRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
