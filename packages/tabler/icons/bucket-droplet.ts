import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBucketDropletIcon],svg[tabler-bucket-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m5 16l1.465 1.638a2 2 0 1 1-3.015.099zm8.737-6.263c2.299-2.3 3.23-5.095 2.081-6.245s-3.945-.217-6.244 2.082s-3.231 5.095-2.082 6.244s3.946.218 6.245-2.081"></svg:path><svg:path d="M7.492 11.818c.362.362.768.676 1.208.934l6.895 4.047c1.078.557 2.255-.075 3.692-1.512s2.07-2.614 1.512-3.692q-.557-1.077-4.047-6.895a6 6 0 0 0-.934-1.208"></svg:path></svg:g>`,
})
export class TablerBucketDropletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
