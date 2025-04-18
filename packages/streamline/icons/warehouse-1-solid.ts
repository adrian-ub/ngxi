import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWarehouse1SolidIcon],svg[streamline-warehouse-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 6.776a1 1 0 0 1 .318-.731L6.675.12a.5.5 0 0 1 .65 0l6.357 5.925a1 1 0 0 1 .318.731V12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5zM6.77 8.75H5.504v-3h3v3zm-2.024 4H6.5v-3h-3v3zm4.022 0H7.5v-3h3v3z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWarehouse1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
