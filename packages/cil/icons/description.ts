import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilDescriptionIcon],svg[cil-description-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M334.627 16H48v480h424V153.373ZM440 166.627V168H320V48h1.373ZM80 464V48h208v152h152v264Z"></svg:path><svg:path fill="currentColor" d="M136 296h224v32H136zm0 80h224v32H136z"></svg:path>`,
})
export class CilDescriptionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
