import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsForcedozeIcon],svg[arcticons-forcedoze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.72 24.137h4.78m-31 0h4.78m8.405-8.638c-.31.96-1.759.986-2.071 0m6.701 0c.31.96 1.759.986 2.071 0M17.527 6.583l2.024 3.614m-4.36 10.32c-.455-7.232 3.097-11.13 8.809-11.13s9.264 3.898 8.81 11.13c-1.37 1.276-4.492 2.271-8.81 2.271s-7.44-.995-8.81-2.27zm17.64.248l3.192 5.694c.801 1.43 1.107 3.013.033 3.851c-1.132.884-2.646.44-3.318-.736l-3.11-5.437m.845-17.554l-2.024 3.614m-13.28 10.568l-3.192 5.694c-.801 1.43-1.107 3.013-.033 3.851c1.132.884 2.646.44 3.318-.736l3.11-5.437h11.257M37.5 4.5h-27a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2"></svg:path>`,
})
export class ArcticonsForcedozeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
