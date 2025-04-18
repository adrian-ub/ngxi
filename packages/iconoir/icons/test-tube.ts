import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTestTubeIcon],svg[iconoir-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.141 19.995c2.458 1.72 4.281-.012 5.318-1.492l7.3-10.426l1.967-1.065l-6.554-4.588l-8.447 12.064c-1.037 1.48-2.041 3.786.416 5.507"></svg:path><svg:path d="M16.091 11.02c-2.876-.853-4.403.781-7.28-.071"></svg:path></svg:g>`,
})
export class IconoirTestTubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
