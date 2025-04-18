import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowAutofitHeightFilledIcon],svg[tabler-arrow-autofit-height-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.879 3.879a3 3 0 0 0 0 4.242l.09.085l.094.083l.096.08l.158.115a3 3 0 0 0 1.59.515L15 8.998v6.003h-.092a3 3 0 0 0-2.03 5.12a.514.514 0 0 1-.363.878L6 21a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6.514a.515.515 0 0 1 .365.879"></svg:path><svg:path d="M18 13a1 1 0 0 1 1 1v4.584l1.293-1.291a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-.112.097l-.11.071l-.114.054l-.105.035l-.149.03L18 22l-.075-.003l-.126-.017l-.111-.03l-.111-.044l-.098-.052l-.096-.067l-.09-.08l-3-3a1 1 0 0 1 1.414-1.414L17 18.586V14a1 1 0 0 1 1-1m-.148-10.989l.058-.007L18 2l.075.003l.126.017l.111.03l.111.044l.098.052l.104.074l.082.073l3 3a1 1 0 1 1-1.414 1.414L19 5.415V10a1 1 0 0 1-2 0V5.415l-1.293 1.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1 0-1.414l3-3q.053-.054.112-.097l.11-.071l.114-.054l.105-.035z"></svg:path></svg:g>`,
})
export class TablerArrowAutofitHeightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
