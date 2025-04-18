import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSalineDripIcon],svg[openmoji-saline-drip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M40.98 32.178v6.41a5.546 5.546 0 0 1-5.63 5.461h-.71c-3.13.447-3 4.171-3 4.171h-5.66s.13-3.724-3-4.17h-1.37a5.546 5.546 0 0 1-5.63-5.461v-6.411z"></svg:path><svg:path fill="#fff" d="M16.784 31.346s-.266-10.404.391-11.624s2.24-2.833 3.366-2.74s15.264.04 15.264.04s3.718.234 4.344 4.03c.536 3.247 0 10.333 0 10.333z"></svg:path><svg:path fill="#d0cfce" d="M24.018 48.22h9.36v4.777h-9.36z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M35.352 16.135H21.614a5.63 5.63 0 0 0-5.631 5.631h0V38.29a5.63 5.63 0 0 0 5.63 5.631h1.365c3.13.46 3 4.3 3 4.3h5.66s-.13-3.84 3-4.3h.714a5.63 5.63 0 0 0 5.631-5.631V21.766a5.63 5.63 0 0 0-5.63-5.63"></svg:path><svg:path d="M24.018 48.22h9.36v4.777h-9.36zm4.68 4.777v12.032M15.983 36.285h8.035m-8.035-4.107h5.344m-5.344-4.108h8.035m-8.035-4.107h5.344M23.257 16l5.226-5.042l5.902 5.177"></svg:path><svg:path d="M24.731 9.867a4.173 4.173 0 0 0 8.18 0H56v55.162"></svg:path><svg:path d="M40.98 32.178v6.41a5.546 5.546 0 0 1-5.63 5.461h-.71c-3.13.447-3 4.171-3 4.171h-5.66s.13-3.724-3-4.17h-1.37a5.546 5.546 0 0 1-5.63-5.461v-6.411z"></svg:path></svg:g>`,
})
export class OpenmojiSalineDripIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
