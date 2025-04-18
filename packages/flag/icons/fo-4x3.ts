import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagFo4x3Icon],svg[flag-fo-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagFo4x30"><svg:path fill-opacity=".7" d="M-78 32h640v480H-78z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="0" clip-path="url(#flagFo4x30)" transform="translate(78 -32)"><svg:path fill="#fff" d="M-78 32h663.9v480H-78z"></svg:path><svg:path fill="#003897" d="M-76 218.7h185.9V32H216v186.7h371.8v106.6H216V512H109.9V325.3h-186z"></svg:path><svg:path fill="#d72828" d="M-76 245.3h212.4V32h53.1v213.3H588v53.4H189.5V512h-53V298.7H-76z"></svg:path></svg:g>`,
})
export class FlagFo4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
