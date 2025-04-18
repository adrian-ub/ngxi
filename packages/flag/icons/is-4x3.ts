import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagIs4x3Icon],svg[flag-is-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagIs4x30"><svg:path fill-opacity=".7" d="M0 0h640v480H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="0" clip-path="url(#flagIs4x30)"><svg:path fill="#003897" d="M0 0h666.7v480H0z"></svg:path><svg:path fill="#fff" d="M0 186.7h186.7V0h106.6v186.7h373.4v106.6H293.3V480H186.7V293.3H0z"></svg:path><svg:path fill="#d72828" d="M0 213.3h213.3V0h53.4v213.3h400v53.4h-400V480h-53.4V266.7H0z"></svg:path></svg:g>`,
})
export class FlagIs4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
