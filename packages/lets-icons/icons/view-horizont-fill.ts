import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsViewHorizontFillIcon],svg[lets-icons-view-horizont-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M11.725 7.382a9 9 0 0 1 .364 8.563"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14 5c-2.814 2.814-10.029 6.509-10.911 6.955a.05.05 0 0 0 0 .09C3.97 12.49 11.186 16.185 14 19m2-7h5m-5-3l5-2m-5 8l5 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.687 9.519a10 10 0 0 0-.823-2.148L4 12l8.721 4.893a10 10 0 0 0 .966-2.413a3 3 0 1 1 0-4.962" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsViewHorizontFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
