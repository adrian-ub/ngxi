import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirRookIcon],svg[iconoir-rook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 16h10m-8-5h6m-5-7v2m4-2v2m3.4 3H6.6a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6Zm.501 12H6.099a.615.615 0 0 1-.521-.932C6.792 18.06 9.5 13.328 9.5 11V9.6a.6.6 0 0 1 .6-.6h3.8a.6.6 0 0 1 .6.6V11c0 2.327 2.708 7.061 3.922 9.068a.615.615 0 0 1-.521.932Z"></svg:path>`,
})
export class IconoirRookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
