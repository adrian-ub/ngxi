import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAudioBook03Icon],svg[hugeicons-audio-book-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.998 4.955h8.5c.828 0 1.5.673 1.5 1.504v1.504m4 11.11V15.9c0-1.774 0-2.66-.54-2.881s-1.176.406-2.447 1.66c-.662.653-1.047.793-1.971.793c-.82 0-1.229 0-1.523.194c-.604.398-.519 1.181-.519 1.82c0 .64-.085 1.422.519 1.82c.294.194.704.194 1.523.194c.924 0 1.309.14 1.97.794c1.272 1.254 1.908 1.88 2.448 1.66s.54-1.107.54-2.881"></svg:path><svg:path d="M18.007 2.002H5.81c-.498 0-1.006.073-1.408.366c-1.275.93-2.257 3.006-.274 4.88c.557.526 1.336.717 2.101.717h11.564c.794 0 2.218.113 2.218 2.524M3.006 5.154l.034 12.844c.126 2.36 1.73 3.91 3.935 3.91h4.977"></svg:path></svg:g>`,
})
export class HugeiconsAudioBook03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
