import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBetterbatterystatsIcon],svg[arcticons-betterbatterystats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.5 4.5h6.67a1 1 0 0 1 1 1v3.004h4.635a2 2 0 0 1 2 2V41.5a2 2 0 0 1-2 2h-17.61a2 2 0 0 1-2-2V10.504a2 2 0 0 1 2-2H19.5V5.5a1 1 0 0 1 1-1M13.194 16h21.611M19.5 8.504h8.669M24 36.481v-13m-6.5 6.5h13"></svg:path>`,
})
export class ArcticonsBetterbatterystatsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
