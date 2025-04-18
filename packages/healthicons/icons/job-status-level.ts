import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsJobStatusLevelIcon],svg[healthicons-job-status-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 16c2.762 0 5-2.238 5-5s-2.238-5-5-5s-5 2.238-5 5s2.238 5 5 5m-9 5c0-2.483 5.996-4 9-4s9 1.517 9 4v3H15zm5 17a4 4 0 0 1 3-3.874v-2.361H11v2.361A4.002 4.002 0 0 1 10 42a4 4 0 0 1-1-7.874v-2.361a2 2 0 0 1 2-2h12V26h2v3.765h12a2 2 0 0 1 2 2v2.361A4.002 4.002 0 0 1 38 42a4 4 0 0 1-1-7.874v-2.361H25v2.361A4.002 4.002 0 0 1 24 42a4 4 0 0 1-4-4"></svg:path>`,
})
export class HealthiconsJobStatusLevelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
