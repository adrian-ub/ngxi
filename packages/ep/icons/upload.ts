import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epUploadIcon],svg[ep-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048L192 444.8L508.8 128l316.8 316.8l-45.312 45.248z"></svg:path>`,
})
export class EpUploadIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
