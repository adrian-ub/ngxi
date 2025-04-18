import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasTabletIcon],svg[pajamas-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.5H4a.5.5 0 0 0-.5.5v1h9V2a.5.5 0 0 0-.5-.5m.5 3h-9V14a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1 12.25a.75.75 0 0 1 .75-.75h4.75a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class PajamasTabletIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
