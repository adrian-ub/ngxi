import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconChefOutlineIcon],svg[lsicon-chef-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 11.5h8M8 6v2M6 6v2m4-2v2m-5.975 5.5h7.964a.01.01 0 0 0 .011-.011V11a2.5 2.5 0 0 1 2.5-2.5c0-2.212-.783-3.25-2.002-3.46a.67.67 0 0 1-.54-.538C11.661 2.756 9.83 1.5 8 1.5S4.34 2.756 4.042 4.502a.67.67 0 0 1-.54.539C2.282 5.25 1.5 6.288 1.5 8.5A2.5 2.5 0 0 1 4 11v2.475c0 .014.011.025.025.025Z"></svg:path>`,
})
export class LsiconChefOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
