import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNextWeekIcon],svg[material-symbols-light-next-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20V7h6V4h6v3h6v13zm7-13h4V5h-4zm1 9.808l3.308-3.308L11 10.192l-.708.708l2.6 2.6l-2.6 2.6z"></svg:path>`,
})
export class MaterialSymbolsLightNextWeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
