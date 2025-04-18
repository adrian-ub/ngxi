import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLolIcon],svg[lets-icons-lol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-width="2"></svg:circle><svg:circle cx="9" cy="10" r="1.25" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width=".5"></svg:circle><svg:circle cx="15" cy="10" r="1.25" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width=".5"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M8.629 15c-.28 0-.42 0-.494.107s-.032.225.055.461C8.706 16.978 10.217 18 12 18s3.294-1.021 3.81-2.432c.087-.236.13-.354.055-.461c-.074-.107-.214-.107-.494-.107z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsLolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
