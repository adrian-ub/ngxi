import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIncognitowalletIcon],svg[arcticons-incognitowallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42 39.5a1.5 1.5 0 0 0 1.5-1.5h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="2.897 4.828" stroke-linecap="round" stroke-linejoin="round" d="M43.5 33.172V12.414"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 10A1.5 1.5 0 0 0 42 8.5h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="2.919 4.865" stroke-linecap="round" stroke-linejoin="round" d="M37.135 8.5H8.432"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 8.5A1.5 1.5 0 0 0 4.5 10h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="2.897 4.828" stroke-linecap="round" stroke-linejoin="round" d="M4.5 14.828v20.758"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 38A1.5 1.5 0 0 0 6 39.5h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="2.919 4.865" stroke-linecap="round" stroke-linejoin="round" d="M10.865 39.5h28.703"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 20.4h-1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="2.067 2.067" stroke-linecap="round" stroke-linejoin="round" d="M40.433 20.4h-4.085a2.85 2.85 0 0 0-2.848 2.848v1.504a2.85 2.85 0 0 0 2.848 2.848h5.118"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 27.6h1"></svg:path><svg:circle cx="36.472" cy="24" r=".795" fill="currentColor"></svg:circle>`,
})
export class ArcticonsIncognitowalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
