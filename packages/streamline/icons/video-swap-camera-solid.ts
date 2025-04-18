import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVideoSwapCameraSolidIcon],svg[streamline-video-swap-camera-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.6 1.2A.5.5 0 0 1 5 1h4a.5.5 0 0 1 .4.2L10.75 3h1.75A1.5 1.5 0 0 1 14 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 11.5v-7A1.5 1.5 0 0 1 1.5 3h1.75zm5.636 6.244l-.058-.008A3.205 3.205 0 0 0 5.78 4.47a.625.625 0 0 0 .466 1.16A1.955 1.955 0 0 1 8.92 7.26l-.16-.022a.625.625 0 0 0-.584.996l.635.841c.208.275.6.33.876.122l.84-.636a.625.625 0 0 0-.29-1.118ZM5.134 5.853a.625.625 0 0 0-.875-.122l-.841.635a.625.625 0 0 0 .29 1.118l.058.008a3.205 3.205 0 0 0 4.399 2.965a.625.625 0 1 0-.467-1.16a1.955 1.955 0 0 1-2.673-1.63l.16.022a.625.625 0 0 0 .585-.995z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineVideoSwapCameraSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
