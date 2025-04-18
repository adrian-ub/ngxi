import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignalCellular1BarRoundedIcon],svg[material-symbols-signal-cellular-1-bar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.425 22q-.45 0-.737-.3T3.4 21q0-.2.075-.375T3.7 20.3L20.3 3.7q.15-.15.325-.225T21 3.4q.4 0 .7.287t.3.738V20.5q0 .625-.437 1.063T20.5 22zM10 20h10V6.85l-10 10z"></svg:path>`,
})
export class MaterialSymbolsSignalCellular1BarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
