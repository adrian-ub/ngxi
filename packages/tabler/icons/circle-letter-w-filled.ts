import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCircleLetterWFilledIcon],svg[tabler-circle-letter-w-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m2.008 5.876l-.52 4.153l-.56-1.4c-.319-.799-1.41-.837-1.803-.114l-.053.114l-.561 1.4l-.519-4.153a1 1 0 0 0-1-.876l-.116.008a1 1 0 0 0-.868 1.116l1 8c.128 1.025 1.537 1.207 1.92.247L12 13.693l1.072 2.678c.383.96 1.792.778 1.92-.247l1-8a1 1 0 0 0-1.984-.248"></svg:path>`,
})
export class TablerCircleLetterWFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
