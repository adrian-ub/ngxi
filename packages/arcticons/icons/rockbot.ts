import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRockbotIcon],svg[arcticons-rockbot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 20.028V10.03m11.511 13.978H27.98m-7.96 0h-7.547c-3.853 0-6.973-3.136-6.973-6.99s3.12-6.988 6.973-6.988H24m-8.341 13.971L7.085 37.965"></svg:path><svg:circle cx="23.996" cy="24.001" r="3.98" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 10.03h10.51c3.87 0 6.99 3.136 6.99 6.989s-3.12 6.989-6.99 6.989m1 0c3.87 0 6.99 3.12 6.99 6.973s-3.12 6.99-6.99 6.99H24v-9.983"></svg:path>`,
})
export class ArcticonsRockbotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
