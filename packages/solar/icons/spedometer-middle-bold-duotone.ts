import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMiddleBoldDuotoneIcon],svg[solar-spedometer-middle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.02 13.015a3.006 3.006 0 0 0 3.008 3.004a3.006 3.006 0 0 0 3.008-3.004c0-.631-.435-1.507-.974-2.35c-.807-1.26-1.21-1.89-2.034-1.89s-1.227.63-2.034 1.89c-.54.844-.974 1.719-.974 2.35"></svg:path><svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M4.42 5.476q.49-.566 1.057-1.055l.053.048l1.5 1.5A.75.75 0 0 1 5.97 7.03l-1.5-1.5zM2.028 12.75a10 10 0 0 1 0-1.5H4a.75.75 0 0 1 0 1.5zm3.448 6.83a10 10 0 0 1-1.055-1.056l.049-.055l1.5-1.5a.75.75 0 0 1 1.06 1.061l-1.5 1.5zm14.104-1.056q-.49.566-1.056 1.055l-.054-.049l-1.5-1.5a.75.75 0 1 1 1.06-1.06l1.5 1.5zm2.392-7.274a10 10 0 0 1 0 1.5H20a.75.75 0 0 1 0-1.5zm-3.448-6.83q.566.49 1.055 1.056l-.049.054l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5zM12.75 2.028V4a.75.75 0 0 1-1.5 0V2.028a10 10 0 0 1 1.5 0"></svg:path>`,
})
export class SolarSpedometerMiddleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
