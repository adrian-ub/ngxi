import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFoldedHandsIcon],svg[material-symbols-folded-hands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 16v-2.8l-1.9-3.475q-.5.25-.8.725t-.3 1.05v8l1.425 2.5H22L21 9.5l-7-8l-.325.325q-.725.725-.862 1.7t.362 1.85L17.25 12.8V16zm-9 0v-3.2l4.075-7.425q.5-.875.338-1.85t-.863-1.7L10 1.5l-7 8L2 22h7.825l1.425-2.5v-8q0-.575-.312-1.05t-.788-.725L8.25 13.2V16z"></svg:path>`,
})
export class MaterialSymbolsFoldedHandsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
