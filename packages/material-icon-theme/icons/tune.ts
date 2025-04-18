import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTuneIcon],svg[material-icon-theme-tune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fbc02d" d="M12 10h10v2H12z"></svg:path><svg:path fill="#fbc02d" d="M16 4h2v8h-2zm4 18h10v2H20zm4 2h2v4h-2zm0-20h2v14h-2zM2 18h10v2H2z"></svg:path><svg:path fill="#fbc02d" d="M6 18h2v10H6zM6 4h2v10H6zm10 12h2v12h-2z"></svg:path>`,
})
export class MaterialIconThemeTuneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
