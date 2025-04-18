import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsPhotoIcon],svg[ls-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M522 686V114H0v572zM47 551V161h428v390zM666 8v571H548V445h70V55H190v38h-47V8z"></svg:path>`,
})
export class LsPhotoIcon {
  readonly viewBox = input("0 0 666 686")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
