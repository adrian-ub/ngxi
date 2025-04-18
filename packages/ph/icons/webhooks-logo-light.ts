import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWebhooksLogoLightIcon],svg[ph-webhooks-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M179.37 174H109.6a46 46 0 1 1-82.4-33.61a6 6 0 0 1 9.6 7.21A33.68 33.68 0 0 0 30 168a34 34 0 0 0 68 0a6 6 0 0 1 6-6h75.37a14 14 0 1 1 0 12M64 182a14 14 0 0 0 11.73-21.62l36.42-59.18a6 6 0 0 0-2-8.25a34 34 0 1 1 49-42.57a6 6 0 1 0 11-4.79A46 46 0 1 0 99 99.7l-33.48 54.38c-.5-.05-1-.08-1.52-.08a14 14 0 0 0 0 28m128-60a46 46 0 0 0-18.8 4l-33.47-54.39A14 14 0 1 0 128 78a13 13 0 0 0 1.52-.09l36.4 59.17a6.05 6.05 0 0 0 3.73 2.69a6 6 0 0 0 4.53-.73A34 34 0 1 1 192 202a6 6 0 0 0 0 12a46 46 0 0 0 0-92"></svg:path>`,
})
export class PhWebhooksLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
