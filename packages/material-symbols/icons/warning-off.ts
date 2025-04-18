import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWarningOffIcon],svg[material-symbols-warning-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m9.875 1.05l-12.5-12.5L12 2zm-1.4 4.25l-2.3-2.3H1l6.3-10.875L.675 3.5L2.1 2.075l19.8 19.8zM11 15h1.175L11 13.825z"></svg:path>`,
})
export class MaterialSymbolsWarningOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
