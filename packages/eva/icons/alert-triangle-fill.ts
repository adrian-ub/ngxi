import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaAlertTriangleFillIcon],svg[eva-alert-triangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66a3 3 0 0 0-.05-3.04M12 17a1 1 0 1 1 1-1a1 1 0 0 1-1 1m1-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class EvaAlertTriangleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
