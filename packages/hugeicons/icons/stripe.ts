import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStripeIcon],svg[hugeicons-stripe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.742 22.067c-2.13 0-4.41-.84-5.28-1.2a.76.76 0 0 1-.47-.69v-4.7c0-.27.14-.52.37-.65a.77.77 0 0 1 .75 0c.89.51 2.75 1.32 4.19 1.44c.56.04 1.9.09 2.01-.36c.1-.41-1.54-1.07-2.07-1.29l-.28-.12c-2.97-1.11-4.96-2.51-4.96-5.69c0-4.61 3.75-6.25 7.25-6.25c2.48 0 4.52.68 5.33 1.08c.26.13.42.39.42.67v4.5c0 .25-.12.48-.33.62a.73.73 0 0 1-.7.07c-4.06-1.64-5.56-1.12-5.68-.95c-.03.36.83.84 1.63 1.03c2.08.38 6.08 2.18 6.08 6.23c0 4.93-5.19 6.25-8.25 6.25zm-4.25-2.4c.97.36 2.68.9 4.25.9c.28 0 6.75-.05 6.75-4.75c0-3.81-4.69-4.73-4.89-4.76c-1.15-.26-2.99-1.12-2.81-2.68c.05-.47.32-.88.76-1.14c1.08-.65 3.21-.46 5.93.5v-2.92c-.84-.32-2.41-.74-4.25-.74c-1.35 0-5.75.34-5.75 4.75c0 2.09 1.01 3.17 4.01 4.3l.3.12c1.34.54 3.36 1.36 2.97 3.01c-.4 1.76-2.72 1.58-3.59 1.52c-1.26-.1-2.66-.61-3.69-1.07v2.97z" color="currentColor"></svg:path>`,
})
export class HugeiconsStripeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
