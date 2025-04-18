import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsTrashIcon],svg[rivet-icons-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 7v5h2V7z"></svg:path><svg:path d="M11 0H5v3H0v2h1.165l1.553 8.537A3 3 0 0 0 5.669 16h4.662a3 3 0 0 0 2.952-2.463L14.835 5H16V3h-5zM9 3H7V2h2zM4.685 13.179L3.198 5h9.604l-1.487 8.179a1 1 0 0 1-.984.821H5.669a1 1 0 0 1-.984-.821"></svg:path></svg:g>`,
})
export class RivetIconsTrashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
