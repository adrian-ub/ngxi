import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPlayForWorkIcon],svg[ic-round-play-for-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6v4.59H8.71c-.45 0-.67.54-.35.85l3.29 3.29c.2.2.51.2.71 0l3.29-3.29a.5.5 0 0 0-.35-.85H13V6c0-.55-.45-1-1-1s-1 .45-1 1m-3.9 8c-.61 0-1.11.55-.99 1.15C6.65 17.91 9.08 20 12 20s5.35-2.09 5.89-4.85c.12-.6-.38-1.15-.99-1.15c-.49 0-.88.35-.98.83C15.53 16.64 13.93 18 12 18s-3.53-1.36-3.91-3.17c-.1-.48-.5-.83-.99-.83"></svg:path>`,
})
export class IcRoundPlayForWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
