import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPageNextIcon],svg[mdi-page-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H5a2 2 0 0 0-2 2v6h4V9l4 3l-4 3v-2H3v6a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3 14h-4v-2h4zm3-4h-7v-2h7zm0-4h-7V7h7zM3 13H0v-2h3z"></svg:path>`,
})
export class MdiPageNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
