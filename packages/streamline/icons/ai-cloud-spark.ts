import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAiCloudSparkIcon],svg[streamline-ai-cloud-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 9.534a3 3 0 0 1-1.395-.692a3.193 3.193 0 0 1 1.887-5.59a.23.23 0 0 0 .21-.127a3.868 3.868 0 0 1 7.508.91a.25.25 0 0 0 .173.2a2.73 2.73 0 0 1-.173 5.35"></svg:path><svg:path d="M4.528 11.096c-.298-.052-.298-.48 0-.532A2.7 2.7 0 0 0 6.7 8.483l.02-.083c.065-.295.484-.297.551-.003l.022.096a2.71 2.71 0 0 0 2.18 2.069c.299.052.299.482 0 .534a2.71 2.71 0 0 0-2.18 2.069l-.022.096c-.067.294-.486.292-.55-.003l-.019-.082a2.7 2.7 0 0 0-2.173-2.081Z"></svg:path></svg:g>`,
})
export class StreamlineAiCloudSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
