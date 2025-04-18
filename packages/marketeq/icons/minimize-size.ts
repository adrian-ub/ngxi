import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMinimizeSizeIcon],svg[marketeq-minimize-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M43.75 6.25L31.854 18.146M18.146 31.854L6.25 43.75zm0-13.708L6.25 6.25zM43.75 43.75L31.854 31.854z"></svg:path><svg:path stroke="#306CFE" d="M8.333 31.25h8.334a2.083 2.083 0 0 1 2.083 2.083v8.334m0-33.334v8.334a2.083 2.083 0 0 1-2.083 2.083H8.333M31.25 41.667v-8.334a2.083 2.083 0 0 1 2.083-2.083h8.334m0-12.5h-8.334a2.083 2.083 0 0 1-2.083-2.083V8.333"></svg:path></svg:g>`,
})
export class MarketeqMinimizeSizeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
