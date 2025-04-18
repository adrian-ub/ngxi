import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPregnancyRoundedIcon],svg[material-symbols-light-pregnancy-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.73 21.039V16h-.922q-.343 0-.576-.232T9 15.192V9.423Q9 8.577 9.577 8T11 7.423T12.423 8T13 9.423q.9.24 1.45 1.008t.55 1.723v3.038q0 .344-.232.576t-.576.232h-1.961v4.692q0 .344-.232.576t-.576.232h-.23q-.197 0-.33-.133t-.132-.329M11 5.77q-.71 0-1.201-.491q-.491-.492-.491-1.201t.491-1.201q.492-.491 1.201-.491t1.201.491q.491.491.491 1.201t-.491 1.201t-1.201.49"></svg:path>`,
})
export class MaterialSymbolsLightPregnancyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
