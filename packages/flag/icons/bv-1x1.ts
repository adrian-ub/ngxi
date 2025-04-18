import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBv1x1Icon],svg[flag-bv-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagBv1x10"><svg:path fill-opacity=".7" d="M0 0h512v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagBv1x10)"><svg:path fill="#fff" d="M-68 0h699.7v512H-68z"></svg:path><svg:path fill="#d72828" d="M-93-77.8h218.7v276.2H-93zM249.4-.6h381v199h-381zM-67.6 320h190.4v190.3H-67.5zm319.6 2.1h378.3v188.2H252z"></svg:path><svg:path fill="#003897" d="M156.7-25.4H221v535.7h-64.5z"></svg:path><svg:path fill="#003897" d="M-67.5 224.8h697.8v63.5H-67.5z"></svg:path></svg:g>`,
})
export class FlagBv1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
