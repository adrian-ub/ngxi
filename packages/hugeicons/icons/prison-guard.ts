import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPrisonGuardIcon],svg[hugeicons-prison-guard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 8c-1.671-.628-3.749-1-6-1s-4.329.372-6 1"></svg:path><svg:path d="m6.97 8l-.73-1.413c-.579-1.12-.868-1.68-.686-2.176c.182-.495.743-.673 1.865-1.027l3.97-1.255c.272-.086.407-.129.546-.129s.275.043.546.129l4.238 1.34c1.01.319 1.516.478 1.708.927c.193.448-.014.983-.428 2.051L17.398 8M7 8v1.725c0 1.793.921 3.455 2.428 4.378l.514.315a3.93 3.93 0 0 0 4.116 0l.515-.315A5.13 5.13 0 0 0 17 9.725V8m-2 6l1 3m0 0l-1.369 1.195c-1.254 1.096-1.88 1.643-2.631 1.643s-1.377-.547-2.631-1.643L8 17m8 0l1.734.578c.998.333 1.497.5 1.94.756a5 5 0 0 1 1.167.936C21.188 19.647 22 21 22 22M9 14l-1 3m0 0l-1.734.578c-.998.333-1.497.5-1.94.756a5 5 0 0 0-1.167.936C2.812 19.647 2 21 2 22"></svg:path></svg:g>`,
})
export class HugeiconsPrisonGuardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
