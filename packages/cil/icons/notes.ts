import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilNotesIcon],svg[cil-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 152h288v32H112zm0 88h288v32H112zm0 88h152v32H112z"></svg:path><svg:path fill="currentColor" d="M480 48H32v416h448Zm-32 384H64V80h384Z"></svg:path>`,
})
export class CilNotesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
