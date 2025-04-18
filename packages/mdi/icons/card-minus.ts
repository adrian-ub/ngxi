import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardMinusIcon],svg[mdi-card-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18v2h-8v-2zm-4-5c1.09 0 2.12.3 3 .81V6c0-1.11-.89-2-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1c0-3.31 2.69-6 6-6"></svg:path>`,
})
export class MdiCardMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
