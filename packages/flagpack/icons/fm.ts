import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackFmIcon],svg[flagpack-fm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#63B3E1" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackFm0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill="#F7FCFF" fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackFm0)"><svg:path d="m16 7.3l-1.763.927l.336-1.963l-1.426-1.391l1.971-.287L16 2.8l.882 1.786l1.971.287l-1.426 1.39l.336 1.964zm0 12l-1.763.927l.336-1.963l-1.426-1.391l1.971-.287L16 14.8l.882 1.787l1.971.286l-1.426 1.39l.336 1.964zm-6.2-5.8l-1.763.927l.336-1.963l-1.426-1.391l1.971-.287L9.8 9l.882 1.787l1.971.286l-1.426 1.39l.336 1.964zm12.2 0l-1.763.927l.336-1.963l-1.426-1.391l1.971-.287L22 9l.882 1.787l1.971.286l-1.426 1.39l.336 1.964z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackFmIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
