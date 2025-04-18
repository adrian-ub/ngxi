import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWorkHistoryFilledIcon],svg[tdesign-work-history-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.5h9v4H22v5.755A7 7 0 0 0 11.937 21.5H2v-15h5.5zm2 4h5v-2h-5z"></svg:path><svg:path fill="currentColor" d="M12.5 18a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m7.914 1L19 17.586v-1.834h-2v2.662l2 2z"></svg:path>`,
})
export class TdesignWorkHistoryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
