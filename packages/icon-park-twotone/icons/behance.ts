import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBehanceIcon],svg[icon-park-twotone-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="svgIDa"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" fill-rule="evenodd" d="M12 24c5 0 8-2.8 8-7s-3-7-8-7H4v14h8Zm1.031 16C18.537 40 22 37 22 32s-3.463-8-8.969-8H4v16h9.031Z" clip-rule="evenodd"></svg:path><svg:path d="M29 31h15c0-4-2-9-8-9c-5 0-8 4-8 9s3 9 8 9s7-3 7-3m-1-22H30"></svg:path></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#svgIDa)"></svg:path>`,
})
export class IconParkTwotoneBehanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
