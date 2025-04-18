import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirRedoActionIcon],svg[iconoir-redo-action-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19 5v6m-3.5-3H9q0 0 0 0s-5 0-5 4.706C4 18 9 18 9 18h8.714"></svg:path><svg:path d="M12.5 11.5L16 8l-3.5-3.5"></svg:path></svg:g>`,
})
export class IconoirRedoActionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
