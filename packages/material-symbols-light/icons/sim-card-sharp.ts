import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSimCardSharpIcon],svg[material-symbols-light-sim-card-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 18.616h1v-1.424h-1zm0-3.808h1v-3.423h-1zm4 3.808h1v-3.424h-1zm0-5.808h1v-1.423h-1zm4 5.808h1v-1.424h-1zm0-3.808h1v-3.423h-1zM5 21V8.423L10.423 3H19v18z"></svg:path>`,
})
export class MaterialSymbolsLightSimCardSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
