import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidShieldCheckIcon],svg[heroicons-solid-shield-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.166 4.999A11.95 11.95 0 0 0 10 1.944A11.95 11.95 0 0 0 17.834 5c.11.65.166 1.32.166 2.001c0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7q.001-1.024.166-2.001m11.541 3.708a1 1 0 0 0-1.414-1.414L9 10.586L7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidShieldCheckIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
