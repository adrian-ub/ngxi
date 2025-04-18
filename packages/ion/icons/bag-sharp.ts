import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionBagSharpIcon],svg[ion-bag-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M372 160v-12A116.13 116.13 0 0 0 258.89 32h-5.78A116.13 116.13 0 0 0 140 148v12H52a4 4 0 0 0-4 4v300a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V164a4 4 0 0 0-4-4Zm-40 0H180v-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 0 1 332 148Z"></svg:path>`,
})
export class IonBagSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
