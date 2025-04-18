import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirUndoActionIcon],svg[iconoir-undo-action-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5 5v6m3.5-3H15q0 0 0 0s5 0 5 4.706C20 18 15 18 15 18H6.286"></svg:path><svg:path d="M11.5 11.5L8 8l3.5-3.5"></svg:path></svg:g>`,
})
export class IconoirUndoActionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
