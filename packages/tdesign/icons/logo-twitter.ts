import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoTwitterIcon],svg[tdesign-logo-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a4 4 0 0 0-4 4v2h-1a12.96 12.96 0 0 1-8.803-3.434a9.504 9.504 0 0 0 5.806 10.77l1.731.686l-1.528 1.064a13.5 13.5 0 0 1-2.554 1.396C6.707 20.819 7.832 21 9 21c6.075 0 11-4.925 11-11V8.473l.227-.277c.546-.666.93-1.166 1.279-1.657c-.278.111-.548.2-.784.254l-.774.176l-.348-.714A4 4 0 0 0 16 4m6.976 1.755l1.018.696l-.565.825c-.417.61-.832 1.171-1.429 1.91V10c0 7.18-5.82 13-13 13c-2.45 0-4.743-.678-6.7-1.858L.05 19.787l2.581-.484a11.4 11.4 0 0 0 2.912-.965A11.49 11.49 0 0 1 0 8.5c0-1.496.286-2.927.807-4.24l.624-1.573l1.077 1.306A10.98 10.98 0 0 0 10 7.955a6 6 0 0 1 10.947-3.351c.372-.166.764-.385 1.008-.582l.778-.627l1.255 1.557l-.778.627a4 4 0 0 1-.234.176"></svg:path>`,
})
export class TdesignLogoTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
