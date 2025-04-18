import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsLactation24pxIcon],svg[healthicons-lactation-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.314 8.86c1.511 1.693 2.96 3.317 3.482 4.64H16a1 1 0 1 1 0 2h-.274c-.187.49-.421.98-.728 1.437c-.778.917-1.875 1.656-3.165 1.894c-1.36.25-3.027-.039-4.883-1.431l-.9 1.2c.658.493 1.31.876 1.95 1.16V22H4V2h3.98c0 2.005 2.227 4.5 4.334 6.86m5.052 7.606c-.185.264-.366.603-.366.913c0 .398.336.721.75.721s.75-.323.75-.721c0-.31-.181-.649-.366-.913c-.19-.273-.384-.466-.384-.466s-.194.193-.384.466m.744 2.811c-.308.44-.61 1.004-.61 1.521c0 .664.56 1.202 1.25 1.202S20 21.462 20 20.798c0-.517-.302-1.081-.61-1.521c-.317-.455-.64-.777-.64-.777s-.323.322-.64.777"></svg:path>`,
})
export class HealthiconsLactation24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
