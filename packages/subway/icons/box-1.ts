import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayBox1Icon],svg[subway-box-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M365.7 102.4v146.3H512V102.4zm109.7 109.7h-73.1V139h73.1zM0 431.6h146.3V285.3H0zm36.6-109.7h73.1V395H36.6zM0 248.7h146.3V102.4H0zM36.6 139h73.1v73.1H36.6zm146.3 109.7h146.3V102.4H182.9zM219.4 139h73.1v73.1h-73.1zm-36.5 292.6h146.3V285.3H182.9zm36.5-109.7h73.1V395h-73.1zm146.3 109.7H512V285.3H365.7zm36.6-109.7h73.1V395h-73.1z"></svg:path>`,
})
export class SubwayBox1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
