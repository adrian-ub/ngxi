import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeReasonIcon],svg[material-icon-theme-reason-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="M4 4v24h24V4Zm14 15.5a.5.5 0 0 1-.5.5H16v2h1a1 1 0 0 1 1 1v3h-2v-4h-4v4h-1a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h1.5a.5.5 0 0 1 .5.5Zm8-1.5h-4v2h4v2h-4v2h4v2h-5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5Z"></svg:path><svg:path fill="#f44336" d="M12 18h4v2h-4z"></svg:path>`,
})
export class MaterialIconThemeReasonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
