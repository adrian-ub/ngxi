import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatTextRotationNoneIcon],svg[mdi-format-text-rotation-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.5 18l-3 3v-2H5v-2h12.5v-2zm-10.37-8h3.75L12 4.97zm2.62-7l4.75 11h-2.08l-.92-2.19h-5L8.58 14H6.5l4.75-11z"></svg:path>`,
})
export class MdiFormatTextRotationNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
