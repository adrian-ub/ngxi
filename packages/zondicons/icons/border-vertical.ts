import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsBorderVerticalIcon],svg[zondicons-border-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h2v2H1zm0 4h2v2H1zm0 4h2v2H1zm0 4h2v2H1zm0 4h2v2H1zM5 1h2v2H5zm0 8h2v2H5zm0 8h2v2H5zM9 1h2v18H9zm4 0h2v2h-2zm0 8h2v2h-2zm0 8h2v2h-2zm4-16h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z"></svg:path>`,
})
export class ZondiconsBorderVerticalIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
