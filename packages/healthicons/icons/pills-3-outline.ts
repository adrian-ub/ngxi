import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills3OutlineIcon],svg[healthicons-pills-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 21a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M24.385 9.91a1 1 0 0 1 .913 1.08l-.602 7.187a1 1 0 0 1-1.994-.167l.603-7.187a1 1 0 0 1 1.08-.913M14.5 40a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M17.757 36.757a1 1 0 0 1-1.414 0l-5.1-5.1a1 1 0 0 1 1.414-1.414l5.1 5.1a1 1 0 0 1 0 1.414M33.5 38a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0 2a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path><svg:path d="M37.759 29.745a1 1 0 0 1-.544 1.306l-6.668 2.748a1 1 0 0 1-.762-1.85l6.668-2.748a1 1 0 0 1 1.306.544"></svg:path></svg:g>`,
})
export class HealthiconsPills3OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
