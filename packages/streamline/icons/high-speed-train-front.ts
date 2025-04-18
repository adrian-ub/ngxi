import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHighSpeedTrainFrontIcon],svg[streamline-high-speed-train-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.564 5.39c0 3.333-2.572 7.378-5.744 7.378c-3.173 0-5.744-4.045-5.744-7.379S3.647.694 6.82.694s5.744 1.361 5.744 4.695Z"></svg:path><svg:path d="M10.617 10.673c-1.012 1.243-2.341 2.095-3.797 2.095c-1.454 0-2.782-.85-3.794-2.092c.641-1.745 2.1-2.493 3.796-2.493s3.153.747 3.795 2.49m-8.473 1.593L1.076 13.27m10.78-1.004l1.068 1.003M4.497 3.365h4.648s1.271 0 1.271 1.271v0s0 1.271-1.271 1.271H4.497s-1.271 0-1.271-1.271v0s0-1.271 1.271-1.271"></svg:path></svg:g>`,
})
export class StreamlineHighSpeedTrainFrontIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
