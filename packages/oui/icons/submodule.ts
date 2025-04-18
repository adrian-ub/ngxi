import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiSubmoduleIcon],svg[oui-submodule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M6 2H1v12h3V7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1h4V4H7c-.621 0-1-.379-1-1zm10 6v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.25a.75.75 0 0 1 .75.75l-.004.206C6.99 2.317 6.974 3 7 3h8a1 1 0 0 1 1 1zm-1 1h-4a1 1 0 0 1-1-1V7H5v7h10zM2 4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5M6.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class OuiSubmoduleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
