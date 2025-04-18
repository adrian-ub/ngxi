import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRootLightLightIcon],svg[lets-icons-root-light-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.5 14.5l-4-4m0 4l4-4m1-3h-5.902a.15.15 0 0 0-.138.09l-3.803 8.557a.15.15 0 0 1-.28-.014l-.843-2.53a.15.15 0 0 0-.142-.103H7.5"></svg:path>`,
})
export class LetsIconsRootLightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
