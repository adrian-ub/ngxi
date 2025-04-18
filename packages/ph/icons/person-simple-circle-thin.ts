import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleCircleThinIcon],svg[ph-person-simple-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92M116 80a12 12 0 1 1 12 12a12 12 0 0 1-12-12m64 32a4 4 0 0 1-4 4h-44v18.79l31.33 47a4 4 0 0 1-6.66 4.44l-28.67-43l-28.67 43a4 4 0 1 1-6.66-4.44l31.33-47V116H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhPersonSimpleCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
