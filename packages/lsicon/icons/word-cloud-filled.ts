import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWordCloudFilledIcon],svg[lsicon-word-cloud-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a5 5 0 0 0-5 5v.541A3 3 0 0 0 .5 10.5v1A2.5 2.5 0 0 0 3 14h10a2.5 2.5 0 0 0 2.5-2.5v-1A3 3 0 0 0 13 7.541V7a5 5 0 0 0-5-5M5.5 7.5h2V11h1V7.5h2v-1h-5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWordCloudFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
