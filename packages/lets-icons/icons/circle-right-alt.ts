import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCircleRightAltIcon],svg[lets-icons-circle-right-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="m10 11l4 4l-4 4"></svg:path><svg:path stroke-linecap="round" d="M9.67 6.153c-2.108.283-3.94.94-5.153 1.847c-1.213.908-1.725 2.005-1.44 3.087s1.347 2.076 2.989 2.796S9.816 15 12 15m7.794-2.25c.591-.512.975-1.077 1.129-1.663c.154-.585.076-1.18-.23-1.752c-.306-.57-.833-1.106-1.553-1.574c-.72-.47-1.616-.863-2.64-1.158"></svg:path></svg:g>`,
})
export class LetsIconsCircleRightAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
