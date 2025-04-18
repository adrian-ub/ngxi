import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMicIcon],svg[material-symbols-light-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13q-.846 0-1.423-.577T10 11V5q0-.846.577-1.423T12 3t1.423.577T14 5v6q0 .846-.577 1.423T12 13m-.5 7.5v-3.517q-2.35-.216-3.925-1.922T6 11h1q0 2.075 1.463 3.538T12 16t3.538-1.463T17 11h1q0 2.356-1.575 4.062t-3.925 1.92V20.5z"></svg:path>`,
})
export class MaterialSymbolsLightMicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
