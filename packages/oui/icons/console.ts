import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiConsoleIcon],svg[oui-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.157 12.224L5.768 8.32a.404.404 0 0 0 0-.64l-4.61-3.904a.407.407 0 0 1 0-.643a.61.61 0 0 1 .759 0l4.61 3.904c.631.534.63 1.393 0 1.926l-4.61 3.904a.61.61 0 0 1-.76 0a.407.407 0 0 1 0-.643M9 12h6v1H9z"></svg:path>`,
})
export class OuiConsoleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
