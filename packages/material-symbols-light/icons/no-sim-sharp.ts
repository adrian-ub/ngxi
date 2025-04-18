import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNoSimSharpIcon],svg[material-symbols-light-no-sim-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16.425L7.977 5.446L10.423 3H19zm1.423 5.683l-3.838-3.839l.713-.707L19 19.263V21H5V8.423l.87-.87l-3.824-3.822l.714-.708l18.37 18.371z"></svg:path>`,
})
export class MaterialSymbolsLightNoSimSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
