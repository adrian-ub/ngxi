import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareLetterWFilledIcon],svg[tabler-square-letter-w-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-4.992 5.876l-.52 4.153l-.56-1.4c-.319-.799-1.41-.837-1.803-.114l-.053.114l-.561 1.4l-.519-4.153a1 1 0 0 0-1-.876l-.116.008a1 1 0 0 0-.868 1.116l1 8c.128 1.025 1.537 1.207 1.92.247L12 13.693l1.072 2.678c.383.96 1.792.778 1.92-.247l1-8a1 1 0 0 0-1.984-.248"></svg:path>`,
})
export class TablerSquareLetterWFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
