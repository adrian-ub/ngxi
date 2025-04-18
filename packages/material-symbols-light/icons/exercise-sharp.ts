import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExerciseSharpIcon],svg[material-symbols-light-exercise-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.475 9.294l-4.8-4.8l1.177-1.177l4.804 4.849zM8.096 20.704l-4.819-4.781l1.242-1.242l4.8 4.8zm3.479-.227l-8.052-8.052L6.136 9.8l2.435 2.454l3.688-3.688l-2.448-2.43l2.614-2.663l8.102 8.102l-2.664 2.614l-2.429-2.449l-3.688 3.689l2.454 2.434z"></svg:path>`,
})
export class MaterialSymbolsLightExerciseSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
