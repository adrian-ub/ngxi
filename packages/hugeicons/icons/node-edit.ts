import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNodeEditIcon],svg[hugeicons-node-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 19.5h-1c-2.828 0-4.243 0-5.121-.879C6 17.743 6 16.328 6 13.5v-2m0 0V8m0 3.5h5.5"></svg:path><svg:path d="M13 19.5c0-1.178 0-1.768.351-2.134C13.704 17 14.27 17 15.4 17h1.2c1.131 0 1.697 0 2.048.366c.352.366.352.956.352 2.134s0 1.768-.352 2.134c-.35.366-.917.366-2.048.366h-1.2c-1.131 0-1.697 0-2.049-.366S13 20.678 13 19.5M4.286 2h3.428C9.79 2 10 3.11 10 5s-.211 3-2.286 3H4.286C2.21 8 2 6.89 2 5s.211-3 2.286-3m16.72 3.384l.608.606a1.31 1.31 0 0 1 0 1.856l-3.187 3.234a1.76 1.76 0 0 1-.92.483l-1.974.427a.438.438 0 0 1-.523-.52l.42-1.955c.066-.347.235-.667.485-.916l3.227-3.215a1.32 1.32 0 0 1 1.864 0"></svg:path></svg:g>`,
})
export class HugeiconsNodeEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
