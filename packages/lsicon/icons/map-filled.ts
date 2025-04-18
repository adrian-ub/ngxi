import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMapFilledIcon],svg[lsicon-map-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.763 2.075A.5.5 0 0 1 15 2.5v9a.5.5 0 0 1-.276.447l-4 2a.5.5 0 0 1-.41.017l-4.791-1.916l-3.8 1.9A.5.5 0 0 1 1 13.5v-9a.5.5 0 0 1 .276-.447l4-2a.5.5 0 0 1 .41-.017l4.791 1.916l3.8-1.9a.5.5 0 0 1 .486.023M11 12.69l3-1.5V3.309l-3 1.5zm-6-1.5V3.309l-3 1.5v7.882z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMapFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
