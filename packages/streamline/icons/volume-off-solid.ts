import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVolumeOffSolidIcon],svg[streamline-volume-off-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.22 1.28A.75.75 0 0 1 1.28.22l3.866 3.866L8.713 1.58l.003-.002A1.454 1.454 0 0 1 11 2.805v7.134l2.78 2.78a.75.75 0 1 1-1.06 1.061l-2.06-2.06l-.005.006L3.25 4.321l.01-.002L.218 1.28Zm1.986 3.766l7.238 7.237a1.46 1.46 0 0 1-.818-.263l-.008-.005L4.84 9.3H3.5C2.68 9.3 2 8.62 2 7.8v-2c0-.273.075-.531.206-.753Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineVolumeOffSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
