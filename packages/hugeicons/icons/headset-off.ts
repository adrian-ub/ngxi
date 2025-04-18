import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHeadsetOffIcon],svg[hugeicons-headset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m2 2.004l20 19.955m-1-7.982a3.996 3.996 0 0 0-4-3.991a2 2 0 0 0-1.742 1.013M15 14.976v.997c0 1.103.895 1.996 2 1.996q.465-.001.899-.101M5.908 10.137A3.994 3.994 0 0 0 3 13.977a3.996 3.996 0 0 0 4 3.991c1.105 0 2-.893 2-1.995v-2.751"></svg:path><svg:path d="M2.991 13.99c0-1.01-.635-5.825 2.176-8.833m15.847 11.55v-5.605c0-.99-.107-1.983-.418-2.923a8.9 8.9 0 0 0-1.262-2.485C15.552.905 10.368 1.589 7.474 3.223m12.833 17.046c-.35.621-.916 1.064-1.6 1.348c-.706.293-1.273.325-2.136.373c-1.6 0-3.338.02-4.516 0"></svg:path></svg:g>`,
})
export class HugeiconsHeadsetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
