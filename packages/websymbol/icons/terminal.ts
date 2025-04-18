import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolTerminalIcon],svg[websymbol-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1360 1v1000H0V1zM522 601h318v-77H522zm-362-77l317-135v-96L160 159v99l209 84l-209 83z"></svg:path>`,
})
export class WebsymbolTerminalIcon {
  readonly viewBox = input("0 0 1360 1000")
  readonly width = input("1.36em")
  readonly height = input("1em")
}
