import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilVerticalAlignBottom1Icon],svg[cil-vertical-align-bottom1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6.75.75h-6v19.875h6zm-1.5 18.375h-3V2.25h3z" fill="currentColor"></svg:path><svg:path d="M15 7.948H9v12.677h6zm-1.5 11.177h-3V9.448h3z" fill="currentColor"></svg:path><svg:path d="M17.25.75v19.875h6V.75zm4.5 18.375h-3V2.25h3z" fill="currentColor"></svg:path><svg:path d="M.75 21.75h22.5v1.5H.75v-1.5z" fill="currentColor"></svg:path>`,
})
export class CilVerticalAlignBottom1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
