import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiExponentBoxIcon],svg[mdi-exponent-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm8.76 3h1.63l1.11 2.6L17.59 6h1.65s-1.74 4.57-2.78 6.32c-.38.57-1.11.95-1.96.93v-1.5c.46.01.75-.25 1-.62c.11-.13.18-.33.24-.49zM6.41 9.59l2.8 2.79L12 9.59L13.41 11l-2.79 2.79l2.79 2.8L12 18l-2.79-2.79L6.41 18L5 16.59l2.79-2.8L5 11z"></svg:path>`,
})
export class MdiExponentBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
