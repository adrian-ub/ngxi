import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackMrIcon],svg[flagpack-mr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#1C7B4D" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackMr0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackMr0)"><svg:path fill="#E31D1C" d="M0 0v6h32V0zm0 18v6h32v-6z"></svg:path><svg:path fill="#FECA00" d="M16.242 14.379c5.185.028 6.646-4.314 6.646-4.314c-.294 3.715-2.349 6.234-6.646 6.234s-5.875-3.263-6.646-6.518c0 0 1.46 4.569 6.646 4.598"></svg:path><svg:path fill="#FECA00" d="m17.637 9.814l.337 1.963l-1.764-.927l-1.763.927l.337-1.963l-1.427-1.534h1.972l.881-1.93l.882 1.93h1.972z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackMrIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
