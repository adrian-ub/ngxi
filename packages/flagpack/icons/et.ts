import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackEtIcon],svg[flagpack-et-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FECA00" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackEt0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackEt0)"><svg:path fill="#5EAA22" fill-rule="evenodd" d="M0 0v8h32V0z" clip-rule="evenodd"></svg:path><svg:path fill="#E31D1C" fill-rule="evenodd" d="M0 16v8h32v-8z" clip-rule="evenodd"></svg:path><svg:path fill="#2B77B8" fill-rule="evenodd" d="M16 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12" clip-rule="evenodd"></svg:path><svg:path stroke="#FECA00" stroke-width="1.5" d="m16 14l-2.762.927l.86-2.309l-1.874-2.236h2.6L16 8l1.176 2.382h2.657l-1.93 2.236l.684 2.309z" clip-rule="evenodd"></svg:path><svg:path stroke="#2B77B8" d="m15.696 12.035l-2.085 4.36m1.757-4.915h-4m4.754 1.358l3.909 1.804m-3.064-2.768l2.83-3.098"></svg:path></svg:g></svg:g>`,
})
export class FlagpackEtIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
