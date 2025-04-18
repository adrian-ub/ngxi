import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGlovesOutline24pxIcon],svg[healthicons-ppe-gloves-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.445 13.613a4.6 4.6 0 0 1-3.825 3.83L15 22H9l.398-4.778A3.835 3.835 0 0 1 7 13.667V5.5a1 1 0 1 1 2 0v4h.5v-5a1 1 0 1 1 2 0v5h.5v-6a1 1 0 1 1 2 0v6h.5V3a1 1 0 1 1 2 0v6.011c.002.558.118.86.228 1.014c.1.14.215.188.333.195a.68.68 0 0 0 .407-.12a.36.36 0 0 0 .131-.136l.002-.002v.005h.001l.454-1.297a1 1 0 0 1 1.888.66z"></svg:path><svg:path d="M6 14V6H4v8c0 1.525.61 2.728 1.191 3.526c.193.265.498.49.746.674c.126.094.238.177.313.249v.004L6 21h2l.25-3.25l-.646-.547l-.006-.005l-.041-.033a5 5 0 0 1-.748-.815C6.389 15.771 6 14.974 6 14"></svg:path></svg:g>`,
})
export class HealthiconsPpeGlovesOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
