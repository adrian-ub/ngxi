import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeMeter2Icon],svg[icomoon-free-meter2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.732 13.034a4.5 4.5 0 0 0-2.688-5.762a5.95 5.95 0 0 1 1.714-3.514c1.133-1.133 2.64-1.757 4.243-1.757s3.109.624 4.243 1.757a5.96 5.96 0 0 1 1.714 3.514a4.5 4.5 0 0 0-2.688 5.762c-.964.629-2.09.966-3.268.966s-2.304-.338-3.268-.966zm3.889-3.018A.5.5 0 0 1 9 10.5v1c0 .275-.225.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .379-.484L7.75 3h.5z"></svg:path>`,
})
export class IcomoonFreeMeter2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
