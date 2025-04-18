import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCommentsDisabledSharpIcon],svg[material-symbols-light-comments-disabled-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.11 22.53L15.579 17H3V4.806q0-.097.01-.173q.01-.077.029-.174L1.887 3.308l.713-.714l19.223 19.223zM21 18.184L16.317 13.5H17.5v-1h-2.183l-2-2H17.5v-1h-5.183l-2-2H17.5v-1H9.317L5.817 3H21zM6.5 13.5h5.579l-1-1H6.5zm0-3h2.579l-1-1H6.5z"></svg:path>`,
})
export class MaterialSymbolsLightCommentsDisabledSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
