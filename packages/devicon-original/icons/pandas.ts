import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalPandasIcon],svg[devicon-original-pandas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#130754" d="M48.697 15.176h12.25v25.437h-12.25zm0 52.251h12.25v25.436h-12.25z" color="#000"></svg:path><svg:path fill="#ffca00" d="M48.697 48.037h12.25v12.001h-12.25z" color="#000"></svg:path><svg:path fill="#130754" d="M29.017 36.087h12.25v84.552h-12.25zM67.97 88.414h12.25v25.436H67.97zm0-52.297h12.25v25.437H67.97z" color="#000"></svg:path><svg:path fill="#e70488" d="M67.97 68.983h12.25v12.001H67.97z" color="#000"></svg:path><svg:path fill="#130754" d="M87.238 8.55h12.25v84.552h-12.25z" color="#000"></svg:path>`,
})
export class DeviconOriginalPandasIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
