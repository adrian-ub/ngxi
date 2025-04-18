import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeLivescriptIcon],svg[material-icon-theme-livescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0277BD" d="M4 2h4v28H4z"></svg:path><svg:path fill="#0277BD" d="M2 24h28v4H2zm8-20h2v18h-2zm2 16h16v2H12zm2-4h14v2H14zm0-12h2v12h-2zm4 8h10v2H18zm0-8h2v8h-2zm4 4h6v2h-6zm0-4h2v4h-2z"></svg:path><svg:path fill="#0277BD" d="M6 24.586L23.271 7.315l1.414 1.414L7.415 26z"></svg:path>`,
})
export class MaterialIconThemeLivescriptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
