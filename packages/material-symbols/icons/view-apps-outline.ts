import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewAppsOutlineIcon],svg[material-symbols-view-apps-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20V4l6 1v14zm8-1V5h6v14zm14 1l-6-1V5l6-1zM3 17.625l2-.325V6.7l-2-.35zM11 17h2V7h-2zm10 .65V6.35l-2 .35v10.6zm-18-.025l2-.325zM11 17h2zm10 .65l-2-.35z"></svg:path>`,
})
export class MaterialSymbolsViewAppsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
