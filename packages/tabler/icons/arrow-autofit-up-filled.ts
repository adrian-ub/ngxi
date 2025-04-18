import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowAutofitUpFilledIcon],svg[tabler-arrow-autofit-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 21a1 1 0 0 0 1-1V8.999h-.092a3 3 0 0 1-2.03-5.12a.515.515 0 0 0-.363-.879H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3z"></svg:path><svg:path d="M18 21a1 1 0 0 0 1-1V5.416l1.293 1.291a1 1 0 0 0 1.32.083l.094-.083a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-.112-.097l-.11-.071l-.114-.054l-.105-.035l-.149-.03L18 2l-.075.003l-.126.017l-.111.03l-.111.044l-.098.052l-.096.067l-.09.08l-3 3a1 1 0 1 0 1.414 1.414L17 5.414V20a1 1 0 0 0 1 1"></svg:path></svg:g>`,
})
export class TablerArrowAutofitUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
