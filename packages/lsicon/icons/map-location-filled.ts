import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMapLocationFilledIcon],svg[lsicon-map-location-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 2.02V1h1v1.02a6 6 0 0 1 5.48 5.48H15v1h-1.02a6 6 0 0 1-5.48 5.48V15h-1v-1.02A6 6 0 0 1 2.02 8.5H1v-1h1.02A6 6 0 0 1 7.5 2.02m0 1.005A5 5 0 0 0 3.025 7.5H4v1h-.975A5 5 0 0 0 7.5 12.975V12h1v.975A5 5 0 0 0 12.975 8.5H12v-1h.975A5 5 0 0 0 8.5 3.025V4h-1z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6 8a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class LsiconMapLocationFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
