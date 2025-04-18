import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHighSpeedTrainFrontSolidIcon],svg[streamline-high-speed-train-front-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.464 1.2C3.619.36 5.173.009 6.82.009s3.2.351 4.356 1.193c1.179.858 1.888 2.188 1.888 4.002c0 1.593-.546 3.317-1.443 4.739c-1.02-1.797-2.828-2.57-4.799-2.57s-3.78.775-4.8 2.574C1.121 8.523.575 6.798.575 5.203c0-1.814.709-3.144 1.888-4.002Zm.4 9.87c1.045 1.176 2.413 2.011 3.956 2.011s2.913-.837 3.96-2.015c-.7-1.698-2.16-2.444-3.958-2.444c-1.8 0-3.26.747-3.959 2.448Zm.362-6.824c0-.702.57-1.27 1.272-1.27h4.648a1.271 1.271 0 1 1 0 2.541H4.498a1.27 1.27 0 0 1-1.272-1.27Zm-.766 7.501a.75.75 0 0 1-.059 1.06l-1.12 1.002a.75.75 0 0 1-1-1.118l1.12-1.003a.75.75 0 0 1 1.06.06Zm9.08 0a.75.75 0 0 0 .059 1.06l1.12 1.002a.75.75 0 0 0 1-1.118l-1.12-1.003a.75.75 0 0 0-1.06.06Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHighSpeedTrainFrontSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
