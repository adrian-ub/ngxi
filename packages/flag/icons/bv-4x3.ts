import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBv4x3Icon],svg[flag-bv-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagBv4x30"><svg:path fill-opacity=".7" d="M0 0h640v480H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagBv4x30)"><svg:path fill="#fff" d="M-28 0h699.7v512H-28z"></svg:path><svg:path fill="#d72828" d="M-53-77.8h218.7v276.2H-53zM289.4-.6h381v199h-381zM-27.6 320h190.4v190.3H-27.6zm319.6 2.1h378.3v188.2H292z"></svg:path><svg:path fill="#003897" d="M196.7-25.4H261v535.7h-64.5z"></svg:path><svg:path fill="#003897" d="M-27.6 224.8h698v63.5h-698z"></svg:path></svg:g>`,
})
export class FlagBv4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
