import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteWindLineIcon],svg[mingcute-wind-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.5 4a1.5 1.5 0 0 0-1.47 1.199A1 1 0 1 1 7.07 4.8A3.5 3.5 0 1 1 10.5 9H5a1 1 0 0 1 0-2h5.5a1.5 1.5 0 0 0 0-3m8 4a1.5 1.5 0 0 0-1.47 1.199a1 1 0 1 1-1.96-.398A3.5 3.5 0 1 1 18.5 13H3a1 1 0 1 1 0-2h15.5a1.5 1.5 0 0 0 0-3m-5.47 10.801A1.5 1.5 0 1 0 14.5 17H8a1 1 0 1 1 0-2h6.5a3.5 3.5 0 1 1-3.43 4.199a1 1 0 1 1 1.96-.398"></svg:path></svg:g>`,
})
export class MingcuteWindLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
