import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKexIcon],svg[token-branded-kex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#298DFF" d="M4.35 8.512c-.349.192-.787.158-.787-.247v-1.67L9.885 3v1.67c0 .406-.281.9-.653 1.092L4.35 8.518z"></svg:path><svg:path fill="#344AE6" d="M13.463 20.167c.349-.197.349-.54 0-.732l-5.034-2.868a1.5 1.5 0 0 0-1.283 0l-1.457.838l6.323 3.594l1.457-.832z"></svg:path><svg:path fill="#4264F2" d="M18.863 5.756c-.36-.185-.675-.04-.675.371v5.738c0 .405.292.9.675 1.085l1.518.839V6.594l-1.518-.832z"></svg:path><svg:path fill="#298DFF" d="M3.563 6.6L9.885 3l5.687 3.234c.349.192.349.535 0 .726l-5.04 2.869c-.343.191-.934.191-1.277 0L3.562 6.594z"></svg:path><svg:path fill="#344AE6" d="M5.25 10.763c0-.411.298-.563.692-.366l5.366 2.92A1.41 1.41 0 0 1 12 14.418V21l-6.75-3.656z"></svg:path><svg:path fill="#4264F2" d="M14.886 17.018c-.338.197-.636.045-.636-.36V10.92c0-.405.276-.9.636-1.091l5.552-3.234v7.194z"></svg:path></svg:g>`,
})
export class TokenBrandedKexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
