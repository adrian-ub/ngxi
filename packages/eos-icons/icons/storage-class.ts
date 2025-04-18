import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsStorageClassIcon],svg[eos-icons-storage-class-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2v4h20ZM6 7H4V5h2Zm14.6 7.8A2.09 2.09 0 0 0 19 14h-7.002a1 1 0 0 0-.998.998v6.004a1 1 0 0 0 .998.998H19a1.82 1.82 0 0 0 1.6-.8L23 18ZM11.998 12H19a4.08 4.08 0 0 1 3 1.39V10H2v4h7.184a2.99 2.99 0 0 1 2.814-2M4 13v-2h2v2Zm5 3H2v4h7Zm-5 3v-2h2v2Z"></svg:path>`,
})
export class EosIconsStorageClassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
