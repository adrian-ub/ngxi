import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsConfusedNegativeIcon],svg[healthicons-confused-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsConfusedNegative0)" clip-rule="evenodd"><svg:path d="M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16m-22.5 2c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4s-2.5 1.79-2.5 4s1.12 4 2.5 4m13 0c1.38 0 2.5-1.79 2.5-4s-1.12-4-2.5-4s-2.5 1.79-2.5 4s1.12 4 2.5 4m-9.224 8.55l.044-.036c1.24-1.005 2.177-1.763 3.627-2.155c1.478-.4 3.601-.44 7.193.346a1 1 0 0 0 .428-1.954c-3.735-.817-6.222-.843-8.143-.323c-1.864.504-3.091 1.5-4.275 2.46l-.133.107a1 1 0 1 0 1.259 1.555"></svg:path><svg:path d="M48 0H0v48h48zm-6 24c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsConfusedNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsConfusedNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
