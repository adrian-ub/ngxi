import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagLr1x1Icon],svg[flag-lr-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagLr1x10"><svg:path fill-opacity=".7" d="M0 0h512v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagLr1x10)"><svg:path fill="#fff" d="M0 0h767.9v512H0z"></svg:path><svg:path fill="#006" d="M0 0h232.7v232.8H0z"></svg:path><svg:path fill="#c00" d="M0 464.9h767.9V512H0z"></svg:path><svg:path fill="#c00" d="M0 465.4h767.9V512H0zm0-92.9h767.9v46.2H0zm0-93.2h766V326H0zM232.7 0h535.1v46.5H232.7zm0 186h535.1v46.8H232.7zm0-92.7h535.1v46.5H232.7z"></svg:path><svg:path fill="#fff" d="m166.3 177.5l-50.7-31l-50.4 31.3l18.7-50.9l-50.3-31.4l62.3-.4l19.3-50.7L135 95h62.3l-50.1 31.7z"></svg:path></svg:g>`,
})
export class FlagLr1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
