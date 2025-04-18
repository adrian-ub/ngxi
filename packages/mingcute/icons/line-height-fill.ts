import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteLineHeightFillIcon],svg[mingcute-line-height-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="m7.06 2.94l2.122 2.12A1.5 1.5 0 0 1 7.5 7.488v9.026a1.5 1.5 0 0 1 1.682 2.426l-2.121 2.122a1.5 1.5 0 0 1-2.122 0L2.818 18.94A1.5 1.5 0 0 1 4.5 16.513V7.487a1.5 1.5 0 0 1-1.682-2.426l2.121-2.122a1.5 1.5 0 0 1 2.122 0ZM20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5h-8a1.5 1.5 0 0 1-.144-2.993L12 17.5zm0-7a1.5 1.5 0 0 1 .144 2.993L20 13.5h-8a1.5 1.5 0 0 1-.144-2.993L12 10.5zm0-7a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3z"></svg:path></svg:g>`,
})
export class MingcuteLineHeightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
