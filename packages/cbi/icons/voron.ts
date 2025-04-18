import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiVoronIcon],svg[cbi-voron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.367L3.718 7.15l-.058.034v9.632L12 21.633l8.344-4.817V7.184Zm4.426 4.579l-6.636 10.1h-2.2l6.638-10.1zm-4.574.008l-3.24 4.933H6.406l3.243-4.933Zm5.752 5.158l-3.243 4.934h-2.2l3.239-4.934Z"></svg:path>`,
})
export class CbiVoronIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
