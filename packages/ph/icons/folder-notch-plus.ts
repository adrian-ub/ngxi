import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFolderNotchPlusIcon],svg[ph-folder-notch-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 120a8 8 0 0 1 8 8v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 8-8m104-32v112a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16M40 96h53.33l21.34-16l-21.34-16H40Zm176-8h-85.33l-27.74 20.8a16.12 16.12 0 0 1-9.6 3.2H40v88h176Z"></svg:path>`,
})
export class PhFolderNotchPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
