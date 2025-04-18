import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWoundsInjuriesIcon],svg[material-symbols-light-wounds-injuries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.785 20.904l-.689-.688l2.45-2.47L3 17.07l.256-.963l2.54.677l-.671-2.546l.964-.256l.676 2.546l4.272-4.271l-2.547-.677l.256-.963l2.54.67l-.67-2.54l.963-.256l.677 2.546l4.271-4.27l-2.546-.677l.256-.964l2.546.671l-.677-2.54l.963-.256l.677 2.546l2.47-2.45l.688.689l-2.45 2.469L21 6.93l-.256.963l-2.54-.677l.671 2.547l-.963.255l-.677-2.546l-4.271 4.271l2.545.677l-.255.964l-2.54-.671l.67 2.54l-.963.256l-.677-2.546l-4.271 4.27l2.546.678l-.255.963l-2.547-.671l.677 2.54l-.963.256l-.677-2.546z"></svg:path>`,
})
export class MaterialSymbolsLightWoundsInjuriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
