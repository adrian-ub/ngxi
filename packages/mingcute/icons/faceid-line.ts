import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteFaceidLineIcon],svg[mingcute-faceid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M4 16a1 1 0 0 1 .993.883L5 17v2h2a1 1 0 0 1 .117 1.993L7 21H5a2 2 0 0 1-1.995-1.85L3 19v-2a1 1 0 0 1 1-1m16 0a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1m-5.2-2.143a1 1 0 1 1 1.4 1.428A5.98 5.98 0 0 1 12 17a5.98 5.98 0 0 1-4.2-1.715a1 1 0 1 1 1.4-1.428A3.98 3.98 0 0 0 12 15c1.09 0 2.077-.435 2.8-1.143M8.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M7 3a1 1 0 0 1 0 2H5v2a1 1 0 0 1-2 0V5a2 2 0 0 1 2-2zm12 0a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0V5h-2a1 1 0 1 1 0-2z"></svg:path></svg:g>`,
})
export class MingcuteFaceidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
