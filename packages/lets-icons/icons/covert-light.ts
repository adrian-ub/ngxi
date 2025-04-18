import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCovertLightIcon],svg[lets-icons-covert-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" d="M6.5 3.5h11a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1"></svg:path><svg:path d="m18 4l-2.214 3.986a1 1 0 0 1-.874.514H9.088a1 1 0 0 1-.874-.514L6 4m12 16l-2.214-3.986a1 1 0 0 0-.874-.514H9.088a1 1 0 0 0-.874.514L6 20"></svg:path><svg:path stroke-linecap="round" d="M12 12.5v3"></svg:path></svg:g>`,
})
export class LetsIconsCovertLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
