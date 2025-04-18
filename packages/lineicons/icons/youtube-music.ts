import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsYoutubeMusicIcon],svg[lineicons-youtube-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.217 8.286C9.265 7.254 10.514 6.743 12 6.743s2.735.51 3.783 1.543s1.562 2.258 1.562 3.714s-.514 2.68-1.562 3.713s-2.297 1.543-3.783 1.543s-2.735-.51-3.783-1.543S6.655 13.455 6.655 12s.514-2.682 1.562-3.714m6.977 3.715L10 14.91V9.088z"></svg:path><svg:path d="M19.071 18.966Q22.001 16.08 22 12q0-4.081-2.929-6.967Q16.141 2.147 12 2.147T4.929 5.033T2 12q0 4.08 2.929 6.966q2.93 2.886 7.071 2.886q4.142 0 7.071-2.886M12 5.433c-1.827 0-3.407.644-4.702 1.92C6.002 8.63 5.345 10.19 5.345 12c0 1.809.657 3.37 1.953 4.646c1.295 1.276 2.874 1.92 4.702 1.92s3.407-.644 4.702-1.92c1.296-1.276 1.953-2.837 1.953-4.646c0-1.81-.657-3.37-1.953-4.647c-1.295-1.276-2.875-1.92-4.702-1.92"></svg:path></svg:g>`,
})
export class LineiconsYoutubeMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
