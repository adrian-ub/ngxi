import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonEdgeEnhancement01Icon],svg[carbon-edge-enhancement-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M26 28v-8h-2v1h-2v2h2v5h-2v2h6v-2h-2z" fill="currentColor"></svg:path><svg:path d="M28 16h2A14 14 0 0 0 16 2v2a12 12 0 0 1 12 12z" fill="currentColor"></svg:path><svg:path d="M26 16A10 10 0 0 0 16 6v10z" fill="currentColor"></svg:path><svg:path d="M16 28a11.96 11.96 0 0 1-10.584-6.345c-.066-.127-.133-.254-.195-.384c-.055-.113-.106-.227-.157-.342A13.12 13.12 0 0 1 4.19 18l-1.968.413A13.917 13.917 0 0 0 2.7 20.3l-.025.009A13.961 13.961 0 0 0 16 30z" fill="currentColor"></svg:path><svg:path d="M5.591 10L3.86 9a14.14 14.14 0 0 0-1.638 4.587l1.968.347A12.152 12.152 0 0 1 5.59 10z" fill="currentColor"></svg:path><svg:path d="M11.816 4.765l-.683-1.878a13.976 13.976 0 0 0-4.182 2.44L8.236 6.86a11.973 11.973 0 0 1 3.58-2.094z" fill="currentColor"></svg:path>`,
})
export class CarbonEdgeEnhancement01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
