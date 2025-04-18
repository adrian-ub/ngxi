import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcutePentagonFillIcon],svg[mingcute-pentagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M10.824 2.618a2 2 0 0 1 2.352 0l7.859 5.71a2 2 0 0 1 .727 2.236l-3.003 9.24a2 2 0 0 1-1.902 1.382H7.143a2 2 0 0 1-1.903-1.382l-3.002-9.24a2 2 0 0 1 .727-2.236l7.86-5.71Z"></svg:path></svg:g>`,
})
export class MingcutePentagonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
