import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBlackMesaIcon],svg[mdi-black-mesa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 2.71 6H9v-6h8l2.15 3.59c.54-1.09.85-2.3.85-3.59a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiBlackMesaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
