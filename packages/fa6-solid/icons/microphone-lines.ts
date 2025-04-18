import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidMicrophoneLinesIcon],svg[fa6-solid-microphone-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 96v160c0 53 43 96 96 96s96-43 96-96h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-32h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-32h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96S96 43 96 96m224 144v16c0 70.7-57.3 128-128 128S64 326.7 64 256v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-33.6c85.8-11.7 152-85.3 152-174.4v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></svg:path>`,
})
export class Fa6SolidMicrophoneLinesIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
