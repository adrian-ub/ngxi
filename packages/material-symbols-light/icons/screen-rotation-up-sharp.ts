import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenRotationUpSharpIcon],svg[material-symbols-light-screen-rotation-up-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.25 22.039l-.708-.714L14.887 19H7V8.69l1 1V18h6.867l-2.306-2.325l.689-.713l3.538 3.538zm3.75-6.71l-1-1V6H9.133l2.306 2.325l-.689.714L7.212 5.5l3.538-3.538l.708.713L9.114 5H17z"></svg:path>`,
})
export class MaterialSymbolsLightScreenRotationUpSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
