import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHappymodIcon],svg[arcticons-happymod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="25.367" r="16.402" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="18.44" cy="21.675" r="3.086" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.293 12.942C6.95 9.602 6.262 6.231 6.262 6.231H4.564c-.35 4.993.662 7.914 4.862 11.605"></svg:path><svg:circle cx="29.56" cy="21.675" r="3.086" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.343 29.374L24 34.517l-5.343-5.143m16.05-16.432c6.345-3.34 7.032-6.711 7.032-6.711h1.697c.35 4.993-.662 7.914-4.862 11.605"></svg:path>`,
})
export class ArcticonsHappymodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
