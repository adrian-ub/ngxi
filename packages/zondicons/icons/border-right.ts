import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsBorderRightIcon],svg[zondicons-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1h2v2H5zm0 8h2v2H5zm0 8h2v2H5zM9 1h2v2H9zm0 4h2v2H9zm0 4h2v2H9zm0 4h2v2H9zm0 4h2v2H9zm4-16h2v2h-2zm0 8h2v2h-2zm0 8h2v2h-2zM1 1h2v2H1zm0 4h2v2H1zm0 4h2v2H1zm0 4h2v2H1zm0 4h2v2H1zM17 1h2v18h-2z"></svg:path>`,
})
export class ZondiconsBorderRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
