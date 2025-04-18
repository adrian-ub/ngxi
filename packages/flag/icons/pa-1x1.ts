import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagPa1x1Icon],svg[flag-pa-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagPa1x10"><svg:path fill-opacity=".7" d="M0 0h512v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagPa1x10)"><svg:path fill="#fff" d="M-26-25h592.5v596H-26z"></svg:path><svg:path fill="#db0000" d="M255.3-20.4h312.1v275.2h-312z"></svg:path><svg:path fill="#0000ab" d="M-54.5 254.8h309.9V571H-54.5zM179 181.6l-46.5-29.2l-46.2 29.5l17.2-48l-46.2-29.6l57.1-.4l17.7-47.8l18.1 47.7h57.1l-45.9 30z"></svg:path><svg:path fill="#d80000" d="m435.2 449l-46.4-29.2l-46.3 29.5l17.2-48l-46.2-29.5l57.2-.4l17.7-47.8l18 47.7h57.2l-46 30z"></svg:path></svg:g>`,
})
export class FlagPa1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
