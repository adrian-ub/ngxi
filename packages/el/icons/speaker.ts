import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elSpeakerIcon],svg[el-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 350.411h282.787L708.197 3.688v1192.623L282.787 849.59H0zm868.033-56.558q125.409 125.41 127.868 304.918q0 172.131-127.868 295.082l-86.066-88.523c59.018-59.018 88.525-128.688 88.525-209.018q0-122.95-88.525-213.934zm147.541-145.082Q1199.999 333.198 1200 593.853q0 260.656-184.426 447.541l-90.984-90.982q147.541-145.083 147.541-355.327q0-210.246-147.541-357.788z"></svg:path>`,
})
export class ElSpeakerIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
