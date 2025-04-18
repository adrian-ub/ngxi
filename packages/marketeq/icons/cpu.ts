import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCpuIcon],svg[marketeq-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M24.896 33.333h.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M29.167 22.917h-8.334m8.334-8.334h-8.334z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M35.417 6.25H14.583c-1.15 0-2.083.933-2.083 2.083v33.334c0 1.15.933 2.083 2.083 2.083h20.834c1.15 0 2.083-.933 2.083-2.083V8.333c0-1.15-.933-2.083-2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqCpuIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
