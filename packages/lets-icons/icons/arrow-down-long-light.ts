import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDownLongLightIcon],svg[lets-icons-arrow-down-long-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 17V3"></svg:path><svg:path fill="currentColor" d="m12.214 21.643l2.059-3.431A.8.8 0 0 0 13.587 17h-3.174a.8.8 0 0 0-.686 1.212l2.059 3.43a.25.25 0 0 0 .428 0"></svg:path></svg:g>`,
})
export class LetsIconsArrowDownLongLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
