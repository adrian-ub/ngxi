import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBpiMobileIcon],svg[arcticons-bpi-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 43.5l12.188-8.705a2.19 2.19 0 0 0 .884-2.15l-2.588-15.079A81 81 0 0 0 24 16.77m0-2.33a46 46 0 0 1 7.572.49"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.81 14.463c2.513-1.31 6.498-6.246-1.81-7.35"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.403 14.44c2.943-.276 4.843-1.563 4.843-3.403s-2.85-2.982-4.843-2.982M24 43.5l-12.188-8.705a2.19 2.19 0 0 1-.884-2.15l2.588-15.079A81 81 0 0 1 24 16.77m0-2.33a46 46 0 0 0-7.572.49"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.19 14.463c-2.513-1.31-6.498-6.246 1.81-7.35"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.597 14.44c-2.943-.276-4.843-1.563-4.843-3.403s2.85-2.982 4.843-2.982"></svg:path><svg:circle cx="24" cy="5.535" r="1.035" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 14.44V6.569m0 10.2V43.5"></svg:path>`,
})
export class ArcticonsBpiMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
