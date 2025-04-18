import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRemoteAtvIcon],svg[arcticons-remote-atv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M19.864 23.47h8.272c.87 0 1.569.7 1.569 1.569V40.93c0 .87-.7 1.57-1.57 1.57h-8.27c-.87 0-1.57-.7-1.57-1.57V25.039c0-.87.7-1.57 1.57-1.57"></svg:path><svg:path d="M26.647 29.183a2.646 2.646 0 1 1-5.293 0a2.646 2.646 0 0 1 5.293 0m.139 6.455v2.542m-5.572-2.542v2.542M16.04 24.83H9.215c-.87 0-1.57-.7-1.57-1.57V7.07c0-.87.7-1.57 1.57-1.57h29.572c.87 0 1.57.7 1.57 1.57v16.19c0 .87-.7 1.57-1.57 1.57H31.96"></svg:path><svg:path d="M15.212 17.244c1.977-2.32 5.268-3.71 8.788-3.71s6.81 1.39 8.788 3.71M18.9 20.782c1.273-1.222 3.137-1.926 5.1-1.926s3.827.704 5.1 1.926"></svg:path></svg:g>`,
})
export class ArcticonsRemoteAtvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
