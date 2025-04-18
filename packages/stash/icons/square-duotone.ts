import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSquareDuotoneIcon],svg[stash-square-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 11.85c0-2.66 0-3.99.518-5.006a4.75 4.75 0 0 1 2.076-2.076C7.86 4.25 9.19 4.25 11.85 4.25h.3c2.66 0 3.99 0 5.007.518a4.75 4.75 0 0 1 2.075 2.076c.518 1.016.518 2.346.518 5.006v.3c0 2.66 0 3.99-.518 5.007a4.75 4.75 0 0 1-2.075 2.075c-1.017.518-2.347.518-5.007.518h-.3c-2.66 0-3.99 0-5.006-.518a4.75 4.75 0 0 1-2.076-2.075C4.25 16.14 4.25 14.81 4.25 12.15z" opacity=".5"></svg:path>`,
})
export class StashSquareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
