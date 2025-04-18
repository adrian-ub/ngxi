import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsForegroundIcon],svg[arcticons-foreground-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.669 38.573h14.588V43.5H17.669zm7.294-4.783a2.61 2.61 0 0 1 2.609 2.61v2.173h0h-5.217h0v-2.174a2.61 2.61 0 0 1 2.608-2.608"></svg:path><svg:circle cx="12.017" cy="23.84" r="2.415" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.72 25.552l9.192 9.246m-9.184-12.664l11.811-11.656"></svg:path><svg:circle cx="24.963" cy="36.447" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.663 7.365L25.807 4.5l-3.123 3.113l2.855 2.865l2.594 9.744L38.398 9.99z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.311 5.99a2.63 2.63 0 0 0-3.921-.217a2.49 2.49 0 0 0 .032 3.317c.676.677 3.21 3.271 3.21 3.271"></svg:path>`,
})
export class ArcticonsForegroundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
