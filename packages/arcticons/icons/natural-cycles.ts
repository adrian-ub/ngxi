import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNaturalCyclesIcon],svg[arcticons-natural-cycles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.574 29.5V17.842L20.298 29.5V17.842M30.62 25.59v.048a3.86 3.86 0 0 1-3.863 3.862h0a3.86 3.86 0 0 1-3.862-3.862v-3.934a3.86 3.86 0 0 1 3.862-3.862h0a3.86 3.86 0 0 1 3.862 3.862v.047"></svg:path><svg:circle cx="35.524" cy="17.842" r="3.341" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsNaturalCyclesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
