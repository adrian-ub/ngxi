import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalPizzaRoundedIcon],svg[material-symbols-light-local-pizza-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.996 4q1.896 0 3.854.606t3.516 1.706q.342.249.513.603q.171.353.171.727q0 .219-.068.448t-.205.447l-6.429 9.636q-.242.364-.606.545t-.744.182t-.743-.177q-.36-.177-.603-.55L4.223 8.537q-.144-.223-.206-.445q-.061-.222-.061-.444q0-.369.171-.717q.171-.349.514-.595q1.557-1.094 3.507-1.715T11.996 4M8.844 9.423q.416 0 .709-.291t.293-.707t-.29-.709t-.707-.293t-.71.291t-.293.707t.291.709t.707.293m3.154 5.077q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293"></svg:path>`,
})
export class MaterialSymbolsLightLocalPizzaRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
