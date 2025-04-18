import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feLayerIcon],svg[fe-layer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 8l6 3l6-3l-6-3zm6.489-4.884l7.993 4.076c.486.248.661.81.391 1.257a.97.97 0 0 1-.39.359l-7.994 4.076a1.09 1.09 0 0 1-.978 0L3.518 8.808c-.486-.248-.661-.81-.391-1.257a.97.97 0 0 1 .39-.359l7.994-4.076c.304-.155.674-.155.978 0m0 13.766a1.07 1.07 0 0 1-.978 0l-7.993-4.147c-.486-.252-.661-.824-.391-1.278a1 1 0 0 1 .39-.365a.82.82 0 0 1 .755 0l7.24 3.755c.303.158.673.158.977 0l7.239-3.755a.82.82 0 0 1 .754 0c.486.252.661.824.391 1.278a1 1 0 0 1-.39.365zm0 4a1.07 1.07 0 0 1-.978 0l-7.993-4.147c-.486-.252-.661-.824-.391-1.278a1 1 0 0 1 .39-.365a.82.82 0 0 1 .755 0l7.24 3.755c.303.158.673.158.977 0l7.239-3.755a.82.82 0 0 1 .754 0c.486.252.661.824.391 1.278a1 1 0 0 1-.39.365z"></svg:path>`,
})
export class FeLayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
