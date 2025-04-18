import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqForkliftIcon],svg[marketeq-forklift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M43.75 37.5h-8.333v-25m-25 25H8.333a2.083 2.083 0 0 1-2.083-2.083v-12.5a2.083 2.083 0 0 1 2.083-2.084h7.042a2.08 2.08 0 0 1 1.875 1.146L18.75 25h16.667v12.5m-8.334 0h-8.166"></svg:path><svg:path stroke="#306CFE" d="M10.417 20.583V10.417A2.083 2.083 0 0 1 12.5 8.333h8.792a2.08 2.08 0 0 1 2.083 1.584l3.708 14.812"></svg:path><svg:path stroke="#344054" d="M31.25 33.333a4.166 4.166 0 1 1 0 8.333a4.166 4.166 0 0 1 0-8.333M10.417 37.5a4.167 4.167 0 1 0 8.334 0a4.167 4.167 0 0 0-8.334 0"></svg:path></svg:g>`,
})
export class MarketeqForkliftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
