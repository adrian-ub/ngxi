import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psThreewordsIcon],svg[ps-threewords-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181 187L303 46V2H22v110h57V54h128l24-2v2q-11 7-18 16L101 203l15 33h10q10-1 17-1q44 0 73 22.5t29 61.5q0 37-27.5 61.5T150 405q-29 0-57-12.5T52 368l-14-13l-34 46q6 7 18 17t51 27t81 17q70 0 114-42.5T312 317t-39.5-92.5T181 187"></svg:path>`,
})
export class PsThreewordsIcon {
  readonly viewBox = input("0 0 312 488")
  readonly width = input("0.64em")
  readonly height = input("1em")
}
