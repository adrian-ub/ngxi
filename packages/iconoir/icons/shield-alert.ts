import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirShieldAlertIcon],svg[iconoir-shield-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7v5m0 4.01l.01-.011M5 18L3.13 4.913a.996.996 0 0 1 .774-1.114l7.662-1.703a2 2 0 0 1 .868 0L20.096 3.8c.51.113.848.596.774 1.114L19 18c-.07.495-.5 3.5-7 3.5S5.07 18.495 5 18"></svg:path>`,
})
export class IconoirShieldAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
