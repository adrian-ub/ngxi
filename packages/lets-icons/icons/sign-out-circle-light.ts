import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSignOutCircleLightIcon],svg[lets-icons-sign-out-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M8 18.928A8 8 0 1 0 8 5.072"></svg:path><svg:path fill="currentColor" d="m2 12l-.39-.312l-.25.312l.25.312zm9 .5a.5.5 0 0 0 0-1zM5.61 6.688l-4 5l.78.624l4-5zm-4 5.624l4 5l.78-.624l-4-5zM2 12.5h9v-1H2z"></svg:path></svg:g>`,
})
export class LetsIconsSignOutCircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
