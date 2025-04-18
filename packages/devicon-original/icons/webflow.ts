import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalWebflowIcon],svg[devicon-original-webflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4353ff" d="M.994.994v126.012h126.012V.994H.994zm71.92 41.715s3.988 30.056 3.988 31.443l5.785-18.12h-.04c2.552-6.86 7.579-13.323 17.152-13.323l-13.563 32.75a18.428 18.318 0 0 1-17.549 12.809s-3.99-28.153-3.99-28.788l-5.982 15.465c-2.673 6.86-7.857 13.323-17.43 13.323l-7.5-45.518a14.918 14.829 0 0 1 14.479 13.44s.998 16.693.998 18.001l7.06-18.16c2.553-6.86 7.418-13.322 16.592-13.322z"></svg:path>`,
})
export class DeviconOriginalWebflowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
