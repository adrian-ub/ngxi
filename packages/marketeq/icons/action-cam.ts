import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqActionCamIcon],svg[marketeq-action-cam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M34.27 14.583h.21"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M14.583 16.667h2.084"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M29.167 31.25h-8.334v12.5h8.334z"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M41.667 22.917v6.25a2.083 2.083 0 0 1-2.084 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083v-18.75a2.083 2.083 0 0 1 2.083-2.084H25"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M43.75 20.833v-12.5c0-1.15-.933-2.083-2.083-2.083H27.083c-1.15 0-2.083.933-2.083 2.083v12.5c0 1.15.933 2.084 2.083 2.084h14.584c1.15 0 2.083-.933 2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqActionCamIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
