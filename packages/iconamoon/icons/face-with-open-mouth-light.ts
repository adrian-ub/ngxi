import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonFaceWithOpenMouthLightIcon],svg[iconamoon-face-with-open-mouth-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-width="1.5"></svg:circle><svg:path stroke-width="2.25" d="M9.01 9.5v.01H9V9.5zm6 0v.01H15V9.5zm-3 5.5v.01H12V15z"></svg:path></svg:g>`,
})
export class IconamoonFaceWithOpenMouthLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
