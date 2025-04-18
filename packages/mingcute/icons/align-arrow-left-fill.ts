import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteAlignArrowLeftFillIcon],svg[mingcute-align-arrow-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M9.056 17.303a1.5 1.5 0 0 0 0-2.121L7.375 13.5H15a1.5 1.5 0 0 0 0-3H7.374l1.682-1.682a1.5 1.5 0 1 0-2.121-2.122L2.692 10.94a1.5 1.5 0 0 0 0 2.121l4.243 4.243a1.5 1.5 0 0 0 2.121 0ZM21.5 6a1.5 1.5 0 0 0-3 0v12a1.5 1.5 0 0 0 3 0z"></svg:path></svg:g>`,
})
export class MingcuteAlignArrowLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
