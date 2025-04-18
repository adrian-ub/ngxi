import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRunningShirtIcon],svg[openmoji-running-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M49.966 4.984v6s-.41 13 5 13v43h-38v-43c5.323-.179 4.969-13.031 4.969-13.031l.031-5.97h3.836a10 10 0 0 0 20 0Z"></svg:path><svg:path fill="#61b2e4" d="M45.797 5.024a10 10 0 0 1-20 0s3.963 5.053 9.324 5.19c5.49.141 10.676-5.19 10.676-5.19"></svg:path><svg:path fill="#fcea2b" d="M14.958 52.008v-4.975c15.793 0 30.84-18.865 30.84-42.033H50c0 25.912-16.506 47.008-35.042 47.008"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16.891 46.494V24.016c5.323-.178 4.97-13.031 4.97-13.031l.03-5.969h3.837a10 10 0 0 0 20 0h4.163v6s-.41 13 5 13v43h-38v-14.75"></svg:path><svg:path d="M41.667 8.319a10.006 10.006 0 0 1-12.15-.116M14.958 52.008v-4.975c15.793 0 30.84-18.865 30.84-42.033H50c0 25.912-16.506 47.008-35.042 47.008"></svg:path></svg:g>`,
})
export class OpenmojiRunningShirtIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
