import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phImageSquareBoldIcon],svg[ph-image-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 24v63.72l-17.86-17.86a20 20 0 0 0-28.28 0L52 203.72V52ZM85.66 204L172 117.66l32 32V204ZM76 96a20 20 0 1 1 20 20a20 20 0 0 1-20-20"></svg:path>`,
})
export class PhImageSquareBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
