import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRegularPatientIcon],svg[healthicons-regular-patient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M34 16c0 5.525-4.475 10-10 10s-10-4.475-10-10S18.475 6 24 6s10 4.475 10 10m-10 8c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8" clip-rule="evenodd"></svg:path><svg:path d="M24 28c-6.007 0-18 3.035-18 8v6h18zm4 1h-2v5h5v-2h-1.45l.25-.25q.9-.9 1.962-1.325A5.8 5.8 0 0 1 33.95 30q1.925 0 3.487 1.1A5.93 5.93 0 0 1 39.65 34h2.1q-.7-2.675-2.862-4.337Q36.725 28 33.95 28q-1.5 0-2.975.525T28.35 30.35l-.35.4zm.35 7h-2.1q.7 2.675 2.863 4.337Q31.275 42 34.05 42q1.5 0 2.938-.562q1.437-.563 2.662-1.788l.35-.4V41h2v-5h-5v2h1.45l-.25.25q-.9.9-1.963 1.325A5.8 5.8 0 0 1 34.05 40a5.9 5.9 0 0 1-3.487-1.1A5.93 5.93 0 0 1 28.35 36"></svg:path></svg:g>`,
})
export class HealthiconsRegularPatientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
