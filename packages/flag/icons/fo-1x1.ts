import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagFo1x1Icon],svg[flag-fo-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagFo1x10"><svg:path fill-opacity=".7" d="M0 0h512v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="0" clip-path="url(#flagFo1x10)"><svg:path fill="#fff" d="M-78 0h708.2v512H-78z"></svg:path><svg:path fill="#003897" d="M-75.9 199.1h198.3V0h113.3v199.1h396.6V313H235.7v199H122.4V312.9H-76z"></svg:path><svg:path fill="#d72828" d="M-75.9 227.6h226.6V0h56.7v227.6h424.9v56.9h-425V512h-56.6V284.4H-75.9z"></svg:path></svg:g>`,
})
export class FlagFo1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
