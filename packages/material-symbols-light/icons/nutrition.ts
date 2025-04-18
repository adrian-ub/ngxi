import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNutritionIcon],svg[material-symbols-light-nutrition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q-2.502 0-4.251-1.749T6 14q0-2.061 1.243-3.674t3.243-2.128q-.709-.142-1.264-.549t-.91-1.016t-.535-1.316t-.156-1.465q.852-.029 1.623.23q.771.26 1.387.772q.615.511 1.006 1.19q.392.679.453 1.52q.306-.737.74-1.396q.433-.659 1.008-1.234q.14-.14.354-.14t.354.14t.14.354t-.14.354q-.53.531-.937 1.145q-.405.615-.663 1.307q2.2.335 3.627 2.009T18 14q0 2.502-1.749 4.251T12 20"></svg:path>`,
})
export class MaterialSymbolsLightNutritionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
