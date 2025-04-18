import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiImageTextIcon],svg[mdi-image-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13h-8v-2h8zm0-6h-8v2h8zm-8 10h8v-2h-8zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2m-1.5 6l-2.2-3l-1.8 2.3l-1.2-1.5L3.5 15z"></svg:path>`,
})
export class MdiImageTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
