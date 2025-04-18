import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEraserSize5Icon],svg[material-symbols-eraser-size-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.05 21q-2.95 0-5-2.05t-2.05-5q0-1.35.5-2.637t1.55-2.338L8.975 5.05Q10.025 4 11.313 3.5T13.95 3q2.95 0 5 2.05t2.05 5q0 1.35-.5 2.638t-1.55 2.337l-3.925 3.925q-1.05 1.05-2.337 1.55t-2.638.5"></svg:path>`,
})
export class MaterialSymbolsEraserSize5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
