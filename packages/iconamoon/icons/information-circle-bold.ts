import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonInformationCircleBoldIcon],svg[iconamoon-information-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-width="2.5"></svg:circle><svg:path stroke-width="3.75" d="M12 8h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" stroke-width="2.5" d="M12 12v4"></svg:path></svg:g>`,
})
export class IconamoonInformationCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
