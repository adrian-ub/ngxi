import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWifi1BarRoundedIcon],svg[material-symbols-wifi-1-bar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.05 0-1.775-.725Q9.5 19.55 9.5 18.5q0-1.05.725-1.775Q10.95 16 12 16q1.05 0 1.775.725q.725.725.725 1.775q0 1.05-.725 1.775Q13.05 21 12 21Z"></svg:path>`,
})
export class MaterialSymbolsWifi1BarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
