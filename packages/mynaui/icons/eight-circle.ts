import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiEightCircleIcon],svg[mynaui-eight-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M12 12s2.5.5 2.5 2s-1.12 2-2.5 2s-2.5-.5-2.5-2s2.5-2 2.5-2m0 0s2.5-.5 2.5-2s-1.12-2-2.5-2s-2.5.5-2.5 2s2.5 2 2.5 2"></svg:path></svg:g>`,
})
export class MynauiEightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
