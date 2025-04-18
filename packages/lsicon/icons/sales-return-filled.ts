import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSalesReturnFilledIcon],svg[lsicon-sales-return-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.207 2H3.793L1 4.793V14h14V4.793zm-9.5 2.5l1.5-1.5h7.586l1.5 1.5zm4 3.5l.647-.646l-.707-.708L4.293 9H10a.5.5 0 0 1 0 1H6v1h4a1.5 1.5 0 0 0 0-3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSalesReturnFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
