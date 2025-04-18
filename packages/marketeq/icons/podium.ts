import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPodiumIcon],svg[marketeq-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m24.042 8.208l-2.167.313l1.563 1.52l-.375 2.146l1.937-1l1.938 1l-.375-2.145l1.562-1.521l-2.167-.313L25 6.25z"></svg:path><svg:path stroke="#306CFE" d="M18.75 43.75H6.25V33.333h12.5zm12.5-22.917h-12.5V43.75h12.5zm12.5 8.334h-12.5V43.75h12.5z"></svg:path></svg:g>`,
})
export class MarketeqPodiumIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
