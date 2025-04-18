import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLeafOutlineIcon],svg[lsicon-leaf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9 12.5s2.678.322 4.208-1.208S14.5 6.5 14.5 6.5s-3.11-.447-4.5 1c-.435.453-1 1-1 2.5zm0 0s-3.5.5-5.912-1.912S1.5 3.5 1.5 3.5s3.652-.348 6.059 2.059C8.526 6.526 9 8 9 9.706zm2.5-2.5L9 12M5 8l3.782 3.972"></svg:path>`,
})
export class LsiconLeafOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
