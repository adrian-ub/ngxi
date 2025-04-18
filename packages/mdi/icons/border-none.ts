import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBorderNoneIcon],svg[mdi-border-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5h2V3h-2m0 10h2v-2h-2m0 10h2v-2h-2M11 5h2V3h-2m8 2h2V3h-2m-8 6h2V7h-2m8 2h2V7h-2m0 14h2v-2h-2m0-6h2v-2h-2m0 6h2v-2h-2m-8-2h2v-2h-2M3 5h2V3H3m0 6h2V7H3m0 6h2v-2H3m0 6h2v-2H3m0 6h2v-2H3m8 2h2v-2h-2m0-2h2v-2h-2m-4 6h2v-2H7m0-6h2v-2H7m0-6h2V3H7z"></svg:path>`,
})
export class MdiBorderNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
