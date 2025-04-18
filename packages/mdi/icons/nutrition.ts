import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNutritionIcon],svg[mdi-nutrition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-2h12zM4 3h10a2 2 0 0 1 2 2v9H8v5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 3v2h2V6zm10 2V6H8v2zM4 10v2h2v-2zm4 0v2h6v-2zm-4 4v2h2v-2z"></svg:path>`,
})
export class MdiNutritionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
