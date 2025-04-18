import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoChat48FilledIcon],svg[fluent-video-chat-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16.25A6.25 6.25 0 0 1 10.25 10h14.5A6.25 6.25 0 0 1 31 16.25v15.5a6.25 6.25 0 0 1-5.995 6.245A13 13 0 0 0 26 32.999C26 25.82 20.18 20 13 20a12.96 12.96 0 0 0-9 3.62zm34.907 19.168L33 31.339v-14.68l5.907-4.078c2.156-1.488 5.097.055 5.097 2.675v17.487c0 2.62-2.941 4.163-5.097 2.675M13 22c6.075 0 11 4.924 11 11c0 6.074-4.925 10.999-11 10.999c-1.864 0-3.662-.466-5.26-1.338l-4.519 1.301a.956.956 0 0 1-1.184-1.184l1.303-4.516A10.95 10.95 0 0 1 2.001 33c0-6.075 4.925-10.999 11-10.999M17 30H9a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2m-8 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentVideoChat48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
