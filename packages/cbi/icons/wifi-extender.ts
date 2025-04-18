import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiWifiExtenderIcon],svg[cbi-wifi-extender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.563 3.214A1.293 1.293 0 0 0 17.273 2h-2.419v1.489a.19.19 0 0 1-.379 0V2h-1.392v1.489a.189.189 0 0 1-.378 0V2h-1.338v1.484a.189.189 0 0 1-.378 0V2H9.583v1.484a.189.189 0 0 1-.378 0V2h-2.4a1.293 1.293 0 0 0-1.29 1.235L4.379 20.618A1.3 1.3 0 0 0 5.674 22h12.658a1.293 1.293 0 0 0 1.29-1.371zm-3.869 17.435H9.667a.325.325 0 0 1 0-.649h5.027a.325.325 0 0 1 0 .649" class="cls-1"></svg:path>`,
})
export class CbiWifiExtenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
