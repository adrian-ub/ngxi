import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWaterFullIcon],svg[material-symbols-light-water-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.68 8.933Q6.938 8.219 8.3 7.86q1.363-.36 2.788-.36q.73 0 1.458.09t1.434.29q1.327.37 2.018.495q.692.125 1.5.125h.886l.483-4.5H5.116zM7.476 21q-.64 0-1.097-.404t-.513-1.025L4 3h16l-1.846 16.571q-.056.621-.513 1.025q-.456.404-1.097.404z"></svg:path>`,
})
export class MaterialSymbolsLightWaterFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
