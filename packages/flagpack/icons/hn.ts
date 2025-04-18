import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackHnIcon],svg[flagpack-hn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackHn0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill="#4564F9" fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackHn0)"><svg:path d="M0 0v8h32V0zm0 16v8h32v-8zm16.402-3.33l-.866.448l.165-.947l-.701-.74h.969l.433-.931l.433.93h.97l-.702.74l.166.948zm-6.084-2.167l-.866.447l.165-.947l-.701-.74h.969l.433-.931l.433.93h.97l-.702.74l.166.948zm0 4.2l-.866.447l.165-.947l-.701-.74h.969l.433-.931l.433.93h.97l-.702.74l.166.948zm12-4.2l-.866.447l.165-.947l-.701-.74h.969l.433-.931l.433.93h.97l-.702.74l.166.948zm0 4.2l-.866.447l.165-.947l-.701-.74h.969l.433-.931l.433.93h.97l-.702.74l.166.948z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackHnIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
