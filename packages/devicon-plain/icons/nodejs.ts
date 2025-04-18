import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainNodejsIcon],svg[devicon-plain-nodejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M63.999 0a5.6 5.6 0 0 0-2.789.744L11.445 29.646L28.852 61.58L64.592.053A8 8 0 0 0 64.003 0Zm2.316.605v.002l35.194 60.577l16.545-30.449a5.5 5.5 0 0 0-1.028-.817L91.38 15.024L66.7.754h-.007c-.12-.061-.252-.099-.378-.15Zm-1.024.248L29.417 62.616l35.579 65.278c.1-.02.198-.023.297-.05l35.653-65.624ZM10.586 30.176c-1.502 1.031-2.35 2.752-2.35 4.595v58.478c0 .93.254 1.838.684 2.645l19.34-33.293Zm108.161 1.4l-16.643 30.629l17.66 30.398V34.77c0-1.15-.382-2.265-1.017-3.195zm-17.204 31.667l-34.808 64.062l.055-.028l50.243-29.183l.004-.002c1.402-.793 2.3-2.155 2.604-3.693zm-72.718.394L9.545 96.832c.406.5.885.936 1.43 1.266l.001.004l49.702 28.866l.53.305l.006.002h.002c.257.151.528.266.798.372q.216.082.433.146c.125.037.251.062.376.089q.362.077.727.108c.118.01.237.01.355.01z"></svg:path>`,
})
export class DeviconPlainNodejsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
