import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackJmIcon],svg[flagpack-jm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#093" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"></svg:path><svg:path fill="#272727" stroke="#FECA00" stroke-width="2.7" d="m-.14-1.041l-2.21-1.824v29.73l2.21-1.824l14.537-12L15.658 12l-1.26-1.041z"></svg:path><svg:path fill="#272727" stroke="#FECA00" stroke-width="2.7" d="m32.164-1.06l2.186-1.724v29.568l-2.186-1.724l-15.219-12L15.601 12l1.344-1.06z"></svg:path></svg:g>`,
})
export class FlagpackJmIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
