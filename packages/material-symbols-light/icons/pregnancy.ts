import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPregnancyIcon],svg[material-symbols-light-pregnancy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.73 21.5V16H9V9.423Q9 8.577 9.577 8T11 7.423T12.423 8T13 9.423q.9.24 1.45 1.008t.55 1.723V16h-2.77v5.5zM11 5.77q-.71 0-1.201-.492t-.491-1.201t.491-1.201T11 2.385t1.201.491t.491 1.201t-.491 1.201q-.492.491-1.201.491"></svg:path>`,
})
export class MaterialSymbolsLightPregnancyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
