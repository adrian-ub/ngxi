import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWeightScale01Icon],svg[hugeicons-weight-scale-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 15v3.889C19 21.114 18.264 22 15.889 22H8.11C5.886 22 5 21.264 5 18.889V15a7 7 0 1 1 14 0"></svg:path><svg:path d="M16 15a4 4 0 0 0-8 0m4 2l1-2m3.312-10H7.688c-.884 0-1.326 0-1.715-.152a2 2 0 0 1-.368-.187c-.35-.22-.595-.568-1.085-1.263c-.382-.541-.573-.812-.507-1.033a.5.5 0 0 1 .107-.19C4.28 2 4.624 2 5.313 2h13.376c.689 0 1.033 0 1.192.175q.075.084.107.19c.066.221-.125.492-.507 1.033c-.49.695-.735 1.042-1.085 1.263a2 2 0 0 1-.368.187C17.637 5 17.196 5 16.312 5M14 8V5m-4 3V5"></svg:path></svg:g>`,
})
export class HugeiconsWeightScale01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
