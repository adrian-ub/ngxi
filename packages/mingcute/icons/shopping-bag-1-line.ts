import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteShoppingBag1LineIcon],svg[mingcute-shopping-bag-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 2a4 4 0 0 1 4 4h2.035a2 2 0 0 1 1.999 1.929l.428 12A2 2 0 0 1 18.464 22H5.536a2 2 0 0 1-1.998-2.071l.428-12A2 2 0 0 1 5.965 6H8a4 4 0 0 1 4-4M8 8H5.965l-.429 12h12.928l-.429-12H16v1a1 1 0 0 1-1.993.117L14 9V8h-4v1a1 1 0 0 1-1.993.117L8 9zm4-4a2 2 0 0 0-1.995 1.85L10 6h4a2 2 0 0 0-2-2"></svg:path></svg:g>`,
})
export class MingcuteShoppingBag1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
