import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagAg1x1Icon],svg[flag-ag-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagAg1x10"><svg:path fill="#25ff01" d="M109 47.6h464.8v464.9H109z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagAg1x10)" transform="translate(-120 -52.4)scale(1.1014)"><svg:path fill="#fff" d="M0 47.6h693V512H0z"></svg:path><svg:path fill="#000001" d="M109 47.6h464.8v186.1H109z"></svg:path><svg:path fill="#0072c6" d="M128.3 232.1h435.8v103.5H128.3z"></svg:path><svg:path fill="#ce1126" d="M692.5 49.2v463.3H347zm-691.3 0v463.3h345.7z"></svg:path><svg:path fill="#fcd116" d="m508.8 232.2l-69.3-17.6l59-44.4l-72.5 10.3l37.3-63l-64.1 37.2l11.3-73.5l-43.4 58l-17.6-67.3l-19.6 69.3l-43.4-59l12.4 75.6l-64.1-39.3l37.2 63l-70.3-11.3l57.9 43.4l-72.4 18.6z"></svg:path></svg:g>`,
})
export class FlagAg1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
