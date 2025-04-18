import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadPenIcon],svg[fad-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M32 160L166.394 26.643a4 4 0 0 1 5.654.026l57.837 58.237a4.034 4.034 0 0 1-.007 5.676L97.348 223.59L32 224zm16.797 5.594V208h40.488l121.92-121.396L180.57 56.56L64.656 175.772a3.937 3.937 0 0 1-5.624.037z"></svg:path>`,
})
export class FadPenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
