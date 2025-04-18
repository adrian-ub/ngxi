import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeBin2Icon],svg[icomoon-free-bin2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h10l1-11H2zm7-14V0H6v2H1v3l1-1h12l1 1V2zM9 2H7V1h2z"></svg:path>`,
})
export class IcomoonFreeBin2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
