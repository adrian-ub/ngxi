import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowTopLongLightIcon],svg[lets-icons-arrow-top-long-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 7v14"></svg:path><svg:path fill="currentColor" d="M11.786 2.357L9.727 5.788A.8.8 0 0 0 10.413 7h3.174a.8.8 0 0 0 .686-1.212l-2.059-3.43a.25.25 0 0 0-.428 0"></svg:path></svg:g>`,
})
export class LetsIconsArrowTopLongLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
