import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epAlarmClockIcon],svg[ep-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 832a320 320 0 1 0 0-640a320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768a384 384 0 0 1 0 768"></svg:path><svg:path fill="currentColor" d="m292.288 824.576l55.424 32l-48 83.136a32 32 0 1 1-55.424-32zm439.424 0l-55.424 32l48 83.136a32 32 0 1 0 55.424-32zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128z"></svg:path>`,
})
export class EpAlarmClockIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
