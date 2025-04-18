import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimpleKeyboardIcon],svg[arcticons-simple-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.168 18.573H7.64a2.08 2.08 0 0 0-2.078 2.078v19.771A2.08 2.08 0 0 0 7.64 42.5h32.72a2.08 2.08 0 0 0 2.078-2.078V20.651a2.08 2.08 0 0 0-2.078-2.078h-5.284"></svg:path><svg:rect width="20.044" height="3.327" x="14.1" y="35.763" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="10.733" y="29.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="16.586" y="29.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".421"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.805 30.355v2.37a.42.42 0 0 1-.42.421H22.86a.42.42 0 0 1-.42-.42v-2.37"></svg:path><svg:rect width="3.366" height="3.366" x="28.291" y="29.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="34.144" y="29.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".421"></svg:rect><svg:rect width="3.366" height="3.366" x="10.733" y="23.797" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".421"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.276 27.163h-1.27a.42.42 0 0 1-.42-.421v-.875m15.072 0v.875a.42.42 0 0 1-.421.42h-1.269"></svg:path><svg:rect width="3.366" height="3.366" x="34.144" y="23.797" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".421"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.253 23.878l-10.131 7.768l-10.13-7.768a2.1 2.1 0 0 1-.824-1.67V7.183A1.683 1.683 0 0 1 14.85 5.5h18.542a1.683 1.683 0 0 1 1.683 1.683v15.025a2.1 2.1 0 0 1-.824 1.67"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.951 21.565a3.64 3.64 0 0 0 3.188 1.424h1.924a3.247 3.247 0 0 0 3.243-3.25h0a3.247 3.247 0 0 0-3.243-3.25h-2.126a3.247 3.247 0 0 1-3.243-3.25h0a3.247 3.247 0 0 1 3.243-3.25h1.924a3.64 3.64 0 0 1 3.188 1.425"></svg:path>`,
})
export class ArcticonsSimpleKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
