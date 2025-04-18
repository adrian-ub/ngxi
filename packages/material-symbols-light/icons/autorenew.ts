import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAutorenewIcon],svg[material-symbols-light-autorenew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.235 15.204q-.358-.739-.546-1.537T4.5 12.05q0-3.139 2.19-5.344T12 4.5h1.387l-2.1-2.1l.707-.708L15.302 5l-3.308 3.308l-.707-.708l2.1-2.1H12q-2.711 0-4.606 1.907T5.5 12.05q0 .592.121 1.208q.121.615.363 1.196zm6.77 7.104L8.699 19l3.308-3.308l.708.708l-2.1 2.1H12q2.712 0 4.606-1.907T18.5 11.95q0-.592-.121-1.208q-.121-.615-.364-1.196l.75-.75q.358.739.546 1.537t.189 1.617q0 3.139-2.19 5.344T12 19.5h-1.386l2.1 2.1z"></svg:path>`,
})
export class MaterialSymbolsLightAutorenewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
