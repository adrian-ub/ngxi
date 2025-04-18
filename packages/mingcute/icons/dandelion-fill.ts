import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteDandelionFillIcon],svg[mingcute-dandelion-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a8 8 0 0 1 5.231 14.053A16 16 0 0 1 18 21a1 1 0 1 1-2 0c0-1.284-.165-2.562-.51-3.799A8 8 0 1 1 12 2m0 6a2 2 0 1 0 .553 3.922a13 13 0 0 1 2.247 3.386a6 6 0 0 0 1.62-1.25a15 15 0 0 0-2.478-3.58A2 2 0 0 0 12 8"></svg:path></svg:g>`,
})
export class MingcuteDandelionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
