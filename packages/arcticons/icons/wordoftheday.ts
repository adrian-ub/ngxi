import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWordofthedayIcon],svg[arcticons-wordoftheday-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.469 31.566c-4.031-2.425-5.143-19.503 4.374-19.299c9.626.207.08 23.467.08 23.467c6.703-5.923 10.14-16.112 16.949-21.899l-4.553 21.9c8.925-5.129 16.078-18.195 11.577-22.738c-1.42-1.434-3.287-.277-3.037 2.02c.453 4.16 6.641 4.844 6.641 4.844"></svg:path>`,
})
export class ArcticonsWordofthedayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
