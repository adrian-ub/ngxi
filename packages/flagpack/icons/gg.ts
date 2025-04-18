import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackGgIcon],svg[flagpack-gg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackGg0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackGg0)"><svg:path fill="#E31D1C" d="M12 0h8v8h12v8H20v8h-8v-8H0V8h12z"></svg:path><svg:path fill="#FECA00" d="M13.006 3.046L14 4.8V10H6.865v-.057l-1.759-.998v5.96L6.771 14H14v5.051l-.995 1.754h5.96l-.956-1.759H18V14h7.2l1.665.906v-5.96l-1.759.997V10H18V4.805h.009l.957-1.759z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackGgIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
