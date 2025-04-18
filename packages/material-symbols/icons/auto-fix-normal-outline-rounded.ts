import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAutoFixNormalOutlineRoundedIcon],svg[material-symbols-auto-fix-normal-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.05 4.95l-1.075-.5Q17.7 4.325 17.7 4t.275-.45l1.075-.5l.5-1.075q.125-.275.45-.275t.45.275l.5 1.075l1.075.5q.275.125.275.45t-.275.45l-1.075.5l-.5 1.075q-.125.275-.45.275t-.45-.275l-.5-1.075ZM5.1 21.7l-2.8-2.8q-.3-.3-.3-.725t.3-.725L13.45 6.3q.3-.3.725-.3t.725.3l2.8 2.8q.3.3.3.725t-.3.725L6.55 21.7q-.3.3-.725.3t-.725-.3Zm.7-2.1l7.2-7.2l-1.4-1.4l-7.2 7.2l1.4 1.4Z"></svg:path>`,
})
export class MaterialSymbolsAutoFixNormalOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
