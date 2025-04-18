import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconEntityframeworkcoreIcon],svg[devicon-entityframeworkcore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#512bd4" d="M0 0h128v128H0z"></svg:path><svg:path fill="#fff" d="M73.022 80.632h-5.415V47.368H86.4v4.596H73.022V62.34h12.514v4.574H73.022v13.72zm-12.582 0H41.601V47.368h18.84v4.596H47.06v9.033h12.537v4.573H47.062v10.443H60.44z"></svg:path>`,
})
export class DeviconEntityframeworkcoreIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
