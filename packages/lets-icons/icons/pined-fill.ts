import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPinedFillIcon],svg[lets-icons-pined-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M8 4.461c0-.43 0-.644.065-.815a1 1 0 0 1 .58-.581C8.818 3 9.033 3 9.462 3h5.078c.43 0 .644 0 .815.065a1 1 0 0 1 .581.58c.065.172.065.387.065.816v.218c0 .89 0 1.335.047 1.77c.108.983.397 1.938.853 2.816c.201.387.448.757.942 1.498l1.038 1.557a1.423 1.423 0 0 1-.84 2.17a24.9 24.9 0 0 1-12.08 0a1.423 1.423 0 0 1-.84-2.17l1.038-1.557c.494-.74.74-1.11.942-1.498a8 8 0 0 0 .852-2.817C8 6.014 8 5.57 8 4.68z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 20v-6.5"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M6 20h12"></svg:path></svg:g>`,
})
export class LetsIconsPinedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
