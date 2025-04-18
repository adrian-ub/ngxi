import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlayPauseThinIcon],svg[ph-play-pause-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 64v128a4 4 0 0 1-8 0V64a4 4 0 0 1 8 0m44-4a4 4 0 0 0-4 4v128a4 4 0 0 0 8 0V64a4 4 0 0 0-4-4m-84 68a11.76 11.76 0 0 1-5.48 10l-88.19 56.12a12 12 0 0 1-12.18.39A11.66 11.66 0 0 1 28 184.15V71.85a11.66 11.66 0 0 1 6.15-10.36a12 12 0 0 1 12.18.39L134.52 118a11.76 11.76 0 0 1 5.48 10m-8 0a3.77 3.77 0 0 0-1.78-3.22L42 68.63a3.94 3.94 0 0 0-2.09-.63a4 4 0 0 0-1.91.5a3.76 3.76 0 0 0-2 3.35v112.3a3.76 3.76 0 0 0 2 3.35a3.91 3.91 0 0 0 4-.13l88.18-56.15A3.77 3.77 0 0 0 132 128"></svg:path>`,
})
export class PhPlayPauseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
