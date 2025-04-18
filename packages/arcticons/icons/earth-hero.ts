import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEarthHeroIcon],svg[arcticons-earth-hero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 23.936c.038 10.91-9.378 19.649-20.543 18.455C13.471 41.483 6.59 34.65 5.624 26.17C4.353 15.014 13.024 5.538 23.936 5.5H42.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.602 23.97c.018 5.316-4.788 9.52-10.3 8.47c-3.355-.64-6.067-3.334-6.73-6.686c-1.089-5.503 3.084-10.338 8.399-10.356h8.63z"></svg:path>`,
})
export class ArcticonsEarthHeroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
