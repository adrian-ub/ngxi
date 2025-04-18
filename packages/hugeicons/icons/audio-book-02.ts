import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAudioBook02Icon],svg[hugeicons-audio-book-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.998 4.946h8.5a1.5 1.5 0 0 1 1.5 1.5v1.5m1 11.547a2.503 2.503 0 0 1-2.5 2.506c-1.38 0-2.5-1.122-2.5-2.506a2.503 2.503 0 0 1 2.5-2.507c1.38 0 2.5 1.122 2.5 2.507m0 0v-6.517c.333.5.6 2.606 3 3.007"></svg:path><svg:path d="M18.007 2.001H5.81c-.498 0-1.006.073-1.408.366c-1.275.93-2.257 3.007-.274 4.88c.557.527 1.336.718 2.101.718h11.564c.794 0 2.218.113 2.218 2.524M3.006 5.153l.034 12.846c.126 2.36 1.73 3.911 3.935 3.911h3.532"></svg:path></svg:g>`,
})
export class HugeiconsAudioBook02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
