import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicineMortarIcon],svg[healthicons-medicine-mortar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M38.014 7.265a3 3 0 0 0-4.02.97L27.685 18h8.248l3.42-6.671a3 3 0 0 0-1.17-3.967z"></svg:path><svg:path fill-rule="evenodd" d="M43 22h-2v3c0 5.784-3.778 10.686-9 12.373V41a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1v-3.627C10.778 35.686 7 30.784 7 25v-3H5v-2h38zM18 38v2h12v-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMedicineMortarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
