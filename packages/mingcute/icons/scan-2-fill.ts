import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteScan2FillIcon],svg[mingcute-scan-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></svg:path><svg:path fill="currentColor" d="M12 4.5a7.5 7.5 0 1 0 6.258 3.364L13.06 13.06a1.5 1.5 0 0 1-2.122-2.122l6.357-6.357a1.51 1.51 0 0 1 2.137.002A10.47 10.47 0 0 1 22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12S6.201 1.5 12 1.5c1.01 0 1.988.143 2.916.41a1.5 1.5 0 0 1-.832 2.883A7.5 7.5 0 0 0 12 4.5"></svg:path></svg:g>`,
})
export class MingcuteScan2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
