import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeymapperIcon],svg[arcticons-keymapper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="22.576" height="22.576" x="19.674" y="5.814" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.509"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.826 28.39v11.288a2.503 2.503 0 0 1-2.508 2.508H7.758a2.503 2.503 0 0 1-2.508-2.508v-17.56a2.503 2.503 0 0 1 2.508-2.508h11.916"></svg:path><svg:rect width="17.559" height="10.034" x="22.182" y="12.085" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.254"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.826 19.986h6.272"></svg:path><svg:circle cx="25.945" cy="14.28" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.453" cy="14.28" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.962" cy="14.28" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.47" cy="14.28" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.979" cy="14.28" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.979" cy="16.788" r=".75" fill="currentColor"></svg:circle><svg:circle cx="33.47" cy="16.788" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.962" cy="16.788" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.453" cy="16.788" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.945" cy="16.788" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.03 39.678h5.017v-3.763l-2.509-2.508l-2.508 2.508Zm-5.644-5.644h3.762l2.509-2.509l-2.383-2.508H8.386Zm16.304 0h-3.762l-2.508-2.509l2.383-2.508h3.888ZM14.03 23.373h5.017v3.763l-2.509 2.508l-2.508-2.508Z"></svg:path>`,
})
export class ArcticonsKeymapperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
